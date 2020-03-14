const PaginationHelper =(articles, pageSize, currentPage) => {
  return articles.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}

export default PaginationHelper
