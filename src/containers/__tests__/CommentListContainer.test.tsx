import {
  mapStateToProps,
} from 'containers/CommentListContainer';

it('mapStateToProps should return comments', () => {
  const mappedProps = mapStateToProps({
    comments: {
      comments: ['a', 'b', 'c'],
    },
  });

  expect(mappedProps).toEqual({ comments: ['a', 'b', 'c']});
});
