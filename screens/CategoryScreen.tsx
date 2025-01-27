import { View, FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/Category";
import CategoryGridTile from "../Components/CategoryGridTile";

import { ListRenderItemInfo } from "react-native";

function renderCategoryItem({ item }: ListRenderItemInfo<Category>) {
  return (
   <CategoryGridTile title={item.title} color={item.color} />
  );
}

function CategoryScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item: Category) => item.id}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
