import { getBlogsApi, getBlogByIdApi } from '@/apis/BlogApi';

import { initialBlogItem, initialBlogData } from '@/constants/initialState';
import { BlogDataType, BlogItemType } from '@/types';

describe('【APIテスト】 BlogApi', () => {
  let blogItem: BlogItemType;
  let blogItemList: BlogDataType;

  beforeEach(() => {
    blogItem = initialBlogItem;
    blogItemList = initialBlogData;
  });

  describe('【関数テスト】 getBlogsApi', () => {
    const apiMock = jest.fn(getBlogsApi);
    const offsetParam = 1;

    it('正常系', async () => {
      const apiMockFunc = apiMock.mockReturnValue(
        Promise.resolve(blogItemList)
      );
      expect(await apiMockFunc(offsetParam)).toEqual(blogItemList);
    });
    it('異常系', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'));

      try {
        apiMockFunc(offsetParam);
      } catch (error) {
        // rejectされたerrorが返ってくるか確認
        expect(error).toMatch('error');
      }
    });
  });

  //   describe('【関数テスト】 getBlogByIdApi', () => {
  //     const apiMock = jest.fn(getBlogsApi);

  //     it('正常系', async () => {});
  //     it('異常系', async () => {});
  //   });
});
