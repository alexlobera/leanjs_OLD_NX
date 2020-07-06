function CoursesPages({ navigate }) {
  if (typeof window !== 'undefined') {
    navigate('/courses/react-fundamentals/');
  }
  return null;
}

export default CoursesPages;
