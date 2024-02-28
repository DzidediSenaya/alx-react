import { selectCourse, unSelectCourse } from './courseActionCreators';

export const boundSelectCourse = index => dispatch => {
  dispatch(selectCourse(index));
};

export const boundUnSelectCourse = index => dispatch => {
  dispatch(unSelectCourse(index));
};
