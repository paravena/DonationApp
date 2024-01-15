import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Header, Search, Tab } from '../components';
import {
  CategoryItem,
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../lib';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/store';
import { FlatList } from 'react-native';
import { updateSelectedCategoryId } from '../redux/reducers';

const Home = () => {
  const user = useSelector((state: State) => state.user);
  const categories = useSelector((state: State) => state.categories);
  const dispatch = useDispatch();
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, [categories.categories]);
  const pagination = (
    items: CategoryItem[],
    page: number,
    pageSize: number,
  ) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
        <HeaderContent>
          <Greeting>
            <GreetingText>Hello,</GreetingText>
            <Header size={1}>
              {user.firstName} {user.lastName}.👋
            </Header>
          </Greeting>
          <ProfileImage source={user.profileImage} resizeMode={'contain'} />
        </HeaderContent>
        <SearchBox>
          <Search />
        </SearchBox>
        <CtaImageContainer>
          <CtaImage
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </CtaImageContainer>
        <CategoriesHeader>
          <Header size={2}>Select Category</Header>
        </CategoriesHeader>
        <CategoriesContainer>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) return;
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prev => [...prev, ...newData]);
                setCategoryPage(prev => prev + 1);
              }
              setIsLoadingCategories(false);
            }}
            data={categoryList}
            renderItem={({ item }) => (
              <CategoryContent>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  isInactive={
                    item.categoryId !== categories.selectedCategoryId
                  }>
                  {item.name}
                </Tab>
              </CategoryContent>
            )}
            keyExtractor={item => `category-${item.categoryId}`}
          />
        </CategoriesContainer>
      </Content>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

const Content = styled.ScrollView``;

const HeaderContent = styled.View`
  margin: ${verticalScale(20)}px ${horizontalScale(24)}px 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Greeting = styled.View`
  gap: ${verticalScale(5)}px;
`;

const GreetingText = styled.Text`
  font-family: Inter;
  font-size: ${scaleFontSize(16)}px;
  line-height: ${scaleFontSize(19)}px;
  font-weight: 400;
  color: #636776;
`;

const ProfileImage = styled.Image`
  height: ${verticalScale(50)}px;
  width: ${horizontalScale(50)}px;
`;

const SearchBox = styled.View`
  margin: ${verticalScale(20)}px ${horizontalScale(24)}px 0
    ${horizontalScale(24)}px;
`;

const CtaImageContainer = styled.Pressable`
  margin: 0 ${horizontalScale(24)}px;
`;
const CtaImage = styled.Image`
  width: 100%;
  height: ${verticalScale(160)}px;
`;

const CategoriesContainer = styled.View`
  margin: 0 ${horizontalScale(24)}px;
`;

const CategoryContent = styled.View`
  margin-right: ${horizontalScale(10)}px;
`;

const CategoriesHeader = styled.View`
  margin: ${verticalScale(6)}px ${horizontalScale(24)}px ${verticalScale(16)}px
    ${horizontalScale(24)}px;
`;

export default Home;
