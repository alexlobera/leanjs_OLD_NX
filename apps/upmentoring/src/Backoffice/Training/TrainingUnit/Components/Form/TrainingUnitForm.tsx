import React from 'react';
import { gql } from '@apollo/client';
import createDecorator from 'final-form-focus';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { ReactSortable } from 'react-sortablejs';
import slugify from 'slugify';

import Link from '../../../../../App/Components/Navigation/Link';
import Flex from '../../../../../App/Components/Layout/Flex';
import {
  Field,
  Form,
  TextField,
  RichTextField,
} from '../../../../../App/Components/Forms';
import { FlexLabel } from '../../../../../App/Components/Forms/Label';
import Button from '../../../../../App/Components/Buttons/Button';
import Box from '../../../../../App/Components/Layout/Box';
import { transformSubmitValues, formatInitialValues } from './dataUtils';
import {
  required,
  composeValidatorsFactory,
} from '../../../../../App/Components/Forms/validators';
import Select from '../../../../../App/Components/Forms/Select';
import Autocomplete from '../../../../../App/Components/Forms/Autocomplete';
import DeleteTrainingUnitButton from '../DeleteTrainingUnitButton';

const focusOnError = createDecorator();

export const FORM_VIDEOS = 'videos';

const FILTER_VIDEOS = 'FILTER_VIDEOS';
const SELECTED_VIDEO = 'SELECTED_VIDEO';
const UNSELECTED_VIDEO = 'UNSELECTED_VIDEO';

// TODO MOVE THIS TO AUTOCOMPLETE COMPONENT
function videosReducer(state: any, action: any) {
  switch (action.type) {
    case SELECTED_VIDEO:
      return {
        ...state,
        items: state.items.filter((item: any) => item.value !== action.value),
      };
    case FILTER_VIDEOS:
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
    case UNSELECTED_VIDEO:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    default:
      return state;
  }
}

const TrainingUnitForm = ({
  fields,
  onSubmit,
  initialValues,
  backUrl,
  selectVideos,
}: any) => {
  const allVideoItems = React.useMemo(
    () =>
      selectVideos && selectVideos.edges && selectVideos.edges.map
        ? selectVideos.edges.map(
            ({
              node: {
                id,
                published: { title, tags },
              },
            }: any) => ({
              value: id,
              title: `${tags ? tags.join() + ' - ' : ''}  ${title}`,
            })
          )
        : [],
    [selectVideos]
  );

  const [state, dispatch] = React.useReducer(videosReducer, {
    allItems: allVideoItems,
    items: allVideoItems,
  });

  const formInitialValues = formatInitialValues(initialValues, allVideoItems);

  React.useEffect(() => {
    if (initialValues.published) {
      dispatch({
        type: FILTER_VIDEOS,
        text: '',
        values: formInitialValues.videos,
      });
    }
  }, []);

  //   const [availableVideoItems, setAvailableVideoItems] = React.useState(
  //     videoItems
  //   );

  //   const [filteredVideoItems, setFilteredVideoItems] = React.useState();

  return (
    <>
      <Form
        mutators={{
          ...arrayMutators,
          replaceVideos: (args: any, mutatorState: any, utils: any) => {
            const [videoItems] = args;
            utils.changeValue(mutatorState, FORM_VIDEOS, () => videoItems);
          },
          generateSlug: (_: any, mutatorState: any, utils: any) => {
            const title = mutatorState.formState?.values?.title || '';
            title &&
              utils.changeValue(mutatorState, 'slug', () =>
                slugify(title, { lower: true })
              );
          },
        }}
        onSubmit={transformSubmitValues(onSubmit)}
        initialValues={formInitialValues}
        decorators={[focusOnError]}
      >
        {({ form, values, submitting, pristine }: any) => {
          //   const memoizedGetAvailableVideosItems = memoize((videos) => {
          //     return videoItems.filter((item) =>
          //       videos ? !videos.find((video) => video.id === item.value) : true
          //     );
          //   });
          //   const availableVideoItems = memoizedGetAvailableVideosItems(
          //     values.videos
          //   );
          //   const availableVideoItems = videoItems.filter((item) =>
          //     values.videos
          //       ? !values.videos.find((video) => video.id === item.value)
          //       : true
          //   );

          function onVideoSelected(_: any, item: any) {
            form.mutators.push(FORM_VIDEOS, item);
            dispatch({
              type: SELECTED_VIDEO,
              value: item.value,
            });
          }

          // TODO MAKE A VIDEO TO EXPLAIN APPROACH USING USE STATE AND USE REDUCER WAS EASIER
          //   function onVideoAutocompleteChange(e) {
          //     setFilteredVideoItems(
          //       e.target.value
          //         ? availableVideoItems.filter(
          //             (item) => item.title.indexOf(e.target.value) !== -1
          //           )
          //         : availableVideoItems
          //     );
          //   }

          function onVideoAutocompleteChange(e: any) {
            dispatch({
              type: FILTER_VIDEOS,
              text: e.target.value,
              values: values.videos,
            });
          }

          return (
            <>
              <Flex flexDirection="column">
                <Field
                  name="title"
                  component={TextField}
                  validate={required}
                  label="Title of the unit"
                  type="text"
                  placeholder="Insert the title of the unit"
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
                <Field
                  name="objectives"
                  validate={required}
                  component={RichTextField}
                  label="Learning objectives"
                />
                <Field
                  name="syllabus"
                  component={RichTextField}
                  label="Curriculum"
                  type="text"
                />
                <Field
                  name="description"
                  component={RichTextField}
                  label="Description"
                  type="text"
                />
                <Field
                  name="previewVideoId"
                  items={allVideoItems}
                  component={Autocomplete}
                  validate={required}
                  label="Select preview video"
                />

                <Select
                  label="Select video lectures"
                  items={state.items}
                  multiple
                  onAutocompleteChange={onVideoAutocompleteChange}
                  onChange={onVideoSelected}
                />

                <FieldArray name={FORM_VIDEOS}>
                  {({ fields: videoFields }) => (
                    <ReactSortable
                      handle=".handle"
                      setList={(sortedList) => {
                        const sameList = sortedList.reduce(
                          (acc, item, index) =>
                            acc &&
                            item.value === values[FORM_VIDEOS][index].value,
                          true
                        );
                        if (!sameList) {
                          form.mutators.replaceVideos(sortedList);
                        }
                      }}
                      list={values[FORM_VIDEOS] || []}
                      animation={150}
                    >
                      {videoFields.map((name, index) => {
                        const item = values[FORM_VIDEOS][index];

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
                                videoFields.remove(index);
                                dispatch({
                                  type: UNSELECTED_VIDEO,
                                  item,
                                });
                              }}
                            >
                              Delete
                            </Link>
                          </Flex>
                        );
                      })}
                    </ReactSortable>
                  )}
                </FieldArray>
                {fields &&
                  fields.edges &&
                  fields.edges.map(({ node }: any) => {
                    // TODO create a serializer for this
                    const {
                      id,
                      validators = [],
                      title,
                      options: { layout = null, metadata = null } = {},
                    } = node;
                    return (
                      <Field
                        name={`customFieldsValues.${id}`}
                        key={id}
                        component={
                          layout === 'markdown' ? RichTextField : TextField
                        }
                        {...(layout === 'markdown' &&
                        metadata?.find((value: any) => value === 'href')
                          ? { showLink: true }
                          : {})}
                        type="text"
                        label={title}
                        validate={composeValidatorsFactory(validators)}
                      />
                    );
                  })}
                <Box mt={5}>
                  <Button
                    disabled={submitting || pristine}
                    variant="tertiary"
                    mr={2}
                    type="submit"
                  >
                    Save
                  </Button>
                  {backUrl && (
                    <Link button variant="tertiary" to={backUrl}>
                      Back to list
                    </Link>
                  )}
                  {initialValues.id && (
                    <DeleteTrainingUnitButton
                      trainingUnitId={initialValues.id}
                    />
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

export const TRAINING_UNIT_FORM_FRAGMENT = gql`
  fragment TrainingUnitForm on TrainingUnit {
    id
    published {
      title
      syllabus
      objectives
      previewVideoId
      videoIds
      slug
      description
      customFieldsValues {
        fieldId
        values
      }
    }
  }
`;

export const TRAINING_UNIT_FORM_QUERY_FRAGMENT = gql`
  fragment trainingUnitQueriesFragment on Query {
    fields(filter: { scopes: [{ name: TrainingUnit }] }) {
      edges {
        node {
          name
          id
          title
          type
          scopes {
            name
          }
          validators {
            name
            payload {
              type
              value
            }
          }
          options {
            metadata
            list {
              value
              title
            }
            layout
          }
        }
      }
    }
  }
`;

export default React.memo(TrainingUnitForm);
