function CoursesPages({ navigate }) {
  if (typeof window !== 'undefined') {
    navigate('/courses/react-redux-fundamentals/');
  }
  return null;
}

export default CoursesPages;
