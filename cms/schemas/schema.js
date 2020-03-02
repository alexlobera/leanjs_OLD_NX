import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./arrays/blockContent";
import tag from "./documents/tag";
import post from "./documents/post";
import person from "./documents/person";
import partner from "./documents/partner";
import job from "./objects/job";
import youtube from "./objects/youtube";
import tweet from "./objects/tweet";
import codesanbox from "./objects/codesanbox";
import code from "./objects/code";
import richBulletPoints from "./arrays/richBulletPoints";
import tedvideo from "./objects/tedvideo";
import form from "./objects/form";
import formType from "./objects/formType";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    person,
    partner,
    tag,
    job,
    youtube,
    tweet,
    codesanbox,
    code,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    richBulletPoints,
    blockContent,
    tedvideo,
    form,
    formType
  ])
});
