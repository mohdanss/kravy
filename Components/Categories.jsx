import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="abc" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="abc" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="abc" />
        </ScrollView>
    )
}

export default Categories