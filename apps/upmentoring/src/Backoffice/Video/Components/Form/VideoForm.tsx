import React, { useCallback, useState, useRef } from 'react';
import { gql } from '@apollo/client';
import createDecorator from 'final-form-focus';
import { createUpload, UpChunk } from '@mux/upchunk';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import slugify from 'slugify';
import { FieldArray } from 'react-final-form-arrays';
import arrayMutators from 'final-form-arrays';
import { VideoPlayer } from '@leanjs/ui-hls';

import Link from '../../../../App/Components/Navigation/Link';
import { VIDEO_API_BASE_URL } from '../../../../App/Config';
import Flex from '../../../../App/Components/Layout/Flex';
import { FlexLabel } from '../../../../App/Components/Forms/Label';
import Box from '../../../../App/Components/Layout/Box';
import {
  Form,
  Field,
  TextField,
  RichTextField,
} from '../../../../App/Components/Forms';
import CheckboxField from '../../../../App/Components/Forms/CheckboxField';
import Button from '../../../../App/Components/Buttons/Button';
import ProgressBar from '../../../../App/Components/Elements/ProgressBar';
// import VideoPlayer from '../../../../App/Components/Media/VideoPlayer';
import Alert from '../../../../App/Components/Elements/Alert';
import { useMagic } from '../../../../Auth/Components/MagicProvider';
import Select from '../../../../App/Components/Forms/Select';

import { required } from '../../../../App/Components/Forms/validators';

import DeleteVideoButton from '../DeleteVideoButton';
import { transformSubmitValues, formatInitialValues } from './dataUtils';
const focusOnError = createDecorator();

interface FetchUploadUrl {
  videoId: string;
  token: string;
}
function fetchUploadUrl({ videoId, token }: FetchUploadUrl) {
  return fetch(`${VIDEO_API_BASE_URL}/upload-url?videoId=${videoId}`, {
    method: 'GET',
    headers: {
      Cache: 'no-cache',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  }).then((response) => response.json());
}

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#000';
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const uploadInitialState = {
  progress: 0,
  error: null as any,
  status: 'initial',
};

export const FORM_TAGS = 'tags';
const FILTER_TAGS = 'FILTER_TAGS';
const SELECTED_TAG = 'SELECTED_TAG';
const UNSELECTED_TAG = 'UNSELECTED_TAG';

// TODO MOVE THIS TO AUTOCOMPLETE COMPONENT
function tagsReducer(state: any, action: any) {
  switch (action.type) {
    case SELECTED_TAG:
      return {
        ...state,
        items: state.items.filter((item: any) => item.value !== action.value),
      };
    case FILTER_TAGS:
      return {
        ...state,
        items: state.allItems.filter(
          (item: any) =>
            item.title.toLowerCase().indexOf(action.text.toLowerCase()) !==
              -1 &&
            !(
              action.values &&
              action.values.find(({ value }: any) => value === item.value)
            )
        ),
      };
    case UNSELECTED_TAG:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    default:
      return state;
  }
}

const VideoForm = ({
  onSubmit,
  initialValues,
  showVideoInput,
  fetchUploadUrlFn = fetchUploadUrl,
  stopPolling,
  startPolling,
  videoUrl,
  posterImageUrl,
  clearVideoAsset,
  resetVideoAsset,
}: any) => {
  const { getToken } = useMagic();
  const allTagItems = [
    'react',
    'graphql',
    'unit 1',
    'unit 2',
    'unit 3',
    'unit 4',
    'unit 5',
    'unit 6',
    'unit 7',
    'unit 8',
    'unit 9',
    'unit 10',
    'beginner',
    'intermediate',
  ];
  const [state, dispatch] = React.useReducer(tagsReducer, {
    allItems: allTagItems,
    items: allTagItems,
  });

  const onDropAccepted = useCallback((files) => {
    onFileChange({
      currentTarget: {
        files,
      },
    });
  }, []);
  const onDropRejected = useCallback((fileRejections, e) => {
    // TODO notify users the files are rejected
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'video/*',
    onDropAccepted,
    onDropRejected,
  });

  const [uploadState, setUploadState] = useState(uploadInitialState);
  const uploadRef = useRef<UpChunk>();

  if (stopPolling && videoUrl) {
    stopPolling(2000);
  }

  const formatedInitialValues = formatInitialValues(initialValues);

  interface OnFileChange {
    currentTarget: {
      files: FileList | null;
    };
  }
  async function onFileChange(e: OnFileChange) {
    const file = e.currentTarget.files && e.currentTarget.files[0];

    if (!file) {
      setUploadState({
        ...uploadState,
        error: "Looks like a file wasn't selected",
      });

      return;
    }

    try {
      const uploadUrl = await fetchUploadUrlFn({
        videoId: initialValues.id,
        token: await getToken(),
      });

      if (!uploadUrl || !uploadUrl.url) {
        throw new Error('Error getting an upload URL');
      }
      clearVideoAsset();
      const upload = createUpload({
        file,
        endpoint: uploadUrl.url,
        chunkSize: 5120, // Uploads the file in ~5mb chunks
      });

      uploadRef.current = upload;

      setUploadState({
        progress: 0,
        error: null,
        status: 'uploading',
      });

      upload.on('error', (err) => {
        setUploadState({
          status: 'failed',
          progress: 0,
          error: err.detail,
        });
      });

      upload.on('progress', ({ detail: progress }) => {
        let status = 'uploading';
        if (progress === 100) {
          status = 'polling';
          startPolling(2000);
        }
        setUploadState({ error: null, status, progress });
      });
    } catch (error) {
      setUploadState({
        progress: 0,
        status: 'failed',
        error: error.message,
      });
    }
  }

  async function cancelUpload() {
    if (uploadRef.current) {
      uploadRef.current.pause();
      resetVideoAsset();
      fetch(`${VIDEO_API_BASE_URL}/cancel-upload/${initialValues.id}`, {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      })
        .then(() => {
          setUploadState(uploadInitialState);
        })
        .catch((err) => {
          // TODO NOTIFY USER IT DIDN'T WORK
        });
    } else {
      // TODO DO SOMETHING
    }
  }

  return (
    <>
      <Form
        onSubmit={transformSubmitValues(onSubmit)}
        initialValues={formatedInitialValues}
        decorators={[focusOnError]}
        mutators={{
          ...arrayMutators,
          generateSlug: (_: any, mutatorState: any, utils: any) => {
            const title = mutatorState.formState.values.title || '';
            title &&
              utils.changeValue(mutatorState, 'slug', () =>
                slugify(title, { lower: true })
              );
          },
        }}
      >
        {({ submitting, values, form }: any) => {
          function onTagSelected(_: any, item: any) {
            form.mutators.push(FORM_TAGS, item);
            dispatch({
              type: SELECTED_TAG,
              value: item.value,
            });
          }

          function onTagAutocompleteChange(
            e: React.ChangeEvent<HTMLInputElement>
          ) {
            dispatch({
              type: FILTER_TAGS,
              text: e.target.value,
              values: values.videos,
            });
          }

          return (
            <>
              <Flex mt={6} flexDirection="column">
                {showVideoInput && (
                  <>
                    {uploadState.status === 'uploading' ? (
                      <>
                        <ProgressBar progress={uploadState.progress} />
                        <Box mt={2}>
                          <Button onClick={cancelUpload}>Cancel</Button>
                        </Box>
                      </>
                    ) : uploadState.status === 'polling' && !videoUrl ? (
                      <Alert>Video uploaded, processing it...</Alert>
                    ) : (
                      <Box maxWidth="480px" mb="20px">
                        <VideoPlayer
                          posterUrl={posterImageUrl}
                          url={videoUrl}
                          autoPlay={false}
                        />
                        <Container {...getRootProps()}>
                          <input {...getInputProps()} onChange={onFileChange} />
                          <p>
                            Drag 'n' drop some files here, or click to select
                            files
                          </p>
                          <em>(Only videos are accepted)</em>
                        </Container>
                        {videoUrl && (
                          <CheckboxField
                            name="isPrivate"
                            label="Require private access"
                          />
                        )}
                      </Box>
                    )}
                    {uploadState.error && (
                      <Alert style={{ color: 'red' }}>
                        {uploadState.error}
                      </Alert>
                    )}
                  </>
                )}

                <Field
                  name="title"
                  component={TextField}
                  label="Title"
                  type="text"
                  placeholder="Enter the title here"
                  validate={required}
                />
                <Box>
                  <Field
                    name="slug"
                    component={TextField}
                    validate={required}
                    label="Slug"
                    type="text"
                    placeholder=""
                  />
                  <Button onClick={form.mutators.generateSlug}>
                    Generate slug
                  </Button>
                </Box>
                <Select
                  label="Select video tags"
                  items={state.items}
                  multiple
                  onAutocompleteChange={onTagAutocompleteChange}
                  onChange={onTagSelected}
                />

                <FieldArray name={FORM_TAGS}>
                  {({ fields }) =>
                    fields.map((name, index) => {
                      const item = values[FORM_TAGS][index];

                      return (
                        <Flex key={name} alignItems="center">
                          <FlexLabel
                            mt={2}
                            mb={2}
                            flexGrow={1}
                            className="handle"
                          >
                            {index + 1} - {item.title}
                          </FlexLabel>
                          <Link
                            onClick={() => {
                              fields.remove(index);
                              dispatch({
                                type: UNSELECTED_TAG,
                                item,
                              });
                            }}
                          >
                            Delete
                          </Link>
                        </Flex>
                      );
                    })
                  }
                </FieldArray>
                <Field
                  name="transcript"
                  component={RichTextField}
                  label="Video transcript"
                  showHeading
                />
                <Box as="hr" mt={6} />
                <Box>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={submitting}
                    loading={submitting}
                    mr={4}
                  >
                    Save
                  </Button>

                  {initialValues && initialValues.id && (
                    // TODO MOVE THE DELETE BUTTON TO THE VIDEO DETAIL PAGE VIEW
                    <DeleteVideoButton videoId={initialValues.id} />
                  )}
                </Box>
              </Flex>
            </>
          );
        }}
      </Form>
    </>
  );
};

export const VIDEO_FORM_FRAGMENT = gql`
  fragment VideoFormFragment on Video {
    id
    title
    slug
    transcript
    tags
    asset {
      url
      isPrivate
      posterImageUrl
    }
  }
`;

export default React.memo(VideoForm);
