import { View, Text, TouchableOpacity, Image } from 'react-native';

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="mr-2 relative">
            <Image source={{ uri: imgUrl }} style={{ width: 80, height: 80 }} className="rounded-full bg-purple-300" />
            <Text className="absolute bottom-1 left-1 text-white font-bold">
                {title}
            </Text>
        </TouchableOpacity >
    )
}

export default CategoryCard;