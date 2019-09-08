import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import tag from './tag'
import post from './post'
import person from './person'
import youtube from './youtube'
import tweet from './tweet'
import codesanbox from './codesanbox'
import code from './code'
import richBulletPoints from './richBulletPoints'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    person,
    tag,
    youtube,
    tweet,
    codesanbox,
    code,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    richBulletPoints,
    blockContent,
  ]),
})
