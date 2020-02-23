import * as Actions from 'actions';
import {
  mapStateToProps,
  mapDispatchToProps,
} from 'containers/CommentBoxContainer';

describe('CommentBoxContainer', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('mapStateToProps', () => {
    it('should return currentlyTyped as prop', () => {
      const currentlyTyped = 'typed';
      const props = mapStateToProps({
        comments: {
          currentlyTyped,
        },
        auth: {
          isAuthenticated: false,
        },
      });
      expect(props.currentlyTyped).toEqual(currentlyTyped);
    });
  });

  describe('mapDispatchToProps', () => {
    it('type comment action gets fired', () => {
      const submitCommentSpyReturn = {};
      const typeCommentSpyReturn = {};
      const submitCommentSpy = jest.spyOn(Actions, 'submitComment');
      const typeCommentSpy = jest.spyOn(Actions, 'typeComment');
      submitCommentSpy.mockReturnValue(submitCommentSpyReturn as any);
      typeCommentSpy.mockReturnValue(typeCommentSpyReturn as any);
      const dispatch = jest.fn();
      const mappedDispatch = mapDispatchToProps(dispatch);
      const value = 'value';
      const event: any = {
        target: {
          value,
        },
      };
      mappedDispatch.handleChange(event);

      expect(dispatch).toHaveBeenCalled;
      expect(dispatch.mock.calls[0][0]).toStrictEqual(typeCommentSpyReturn);
      expect(typeCommentSpy).toHaveBeenCalled;
      expect(typeCommentSpy.mock.calls[0][0]).toEqual(value);
    });

    it('submit comment action gets fired', () => {
      const submitCommentSpyReturn = {};
      const typeCommentSpyReturn = {};
      const submitCommentSpy = jest.spyOn(Actions, 'submitComment');
      const typeCommentSpy = jest.spyOn(Actions, 'typeComment');
      submitCommentSpy.mockReturnValue(submitCommentSpyReturn as any);
      typeCommentSpy.mockReturnValue(typeCommentSpyReturn as any);
      const dispatch = jest.fn();
      const mappedDispatch = mapDispatchToProps(dispatch);
      const eventPreventDefaultSpy = jest.fn();
      const comment = 'comment';
      mappedDispatch.handleSubmit(comment, {
        preventDefault: eventPreventDefaultSpy,
      } as any);

      expect(dispatch).toHaveBeenCalled;
      expect(dispatch.mock.calls[0][0]).toStrictEqual(submitCommentSpyReturn);
      expect(submitCommentSpy).toHaveBeenCalled;
      expect(submitCommentSpy.mock.calls[0][0]).toEqual(comment);
      expect(eventPreventDefaultSpy).toHaveBeenCalled;
    });
  });
});
