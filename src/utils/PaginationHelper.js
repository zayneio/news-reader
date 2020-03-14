const PaginationHelper =(articles, pages, currentPage) => {
  return articles.slice((currentPage - 1) * pages, currentPage * pages);
}

export default PaginationHelper
