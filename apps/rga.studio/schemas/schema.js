import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './arrays/blockContent';
import tag from './documents/tag';
import post from './documents/post';
import person from './documents/person';
import partner from './documents/partner';
import faq from './documents/faq';
import trainingPage from './documents/trainingPage';
import video from './documents/video';
import training from './documents/training';
import job from './objects/job';
import youtube from './objects/youtube';
import faqPage from './objects/faqPage';
import tweet from './objects/tweet';
import codesanbox from './objects/codesanbox';
import code from './objects/code';
import richBulletPoints from './arrays/richBulletPoints';
import richNoBulletPoints from './arrays/richNoBulletPoints';
import tedvideo from './objects/tedvideo';
import form from './objects/form';
import formType from './objects/formType';
//
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    person,
    partner,
    tag,
    trainingPage,
    faq,
    training,
    video,
    job,
    youtube,
    tweet,
    codesanbox,
    code,
    faqPage,
    richBulletPoints,
    richNoBulletPoints,
    blockContent,
    tedvideo,
    form,
    formType,
  ]),
});
