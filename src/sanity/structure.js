// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('blogPost').title('blogPost'),
      S.documentTypeListItem('category').title('Categories'),
   
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['blogPost', 'category'].includes(item.getId()),
      ),
    ])
