// starter native code for HomeScreen

import { StyleSheet, Image, Text, View, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../Components/Categories';

export default () => {
    // remove the default header
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    // -- remove the default header

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}

                    className="w-7 h-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <View className="flex-row content-center">
                        <Text className="font-bold text-xl">
                            Current Location
                        </Text>
                        <View className="mt-1 mx-1">
                            <ChevronDownIcon color={"#00CCBB"} size={20} />
                        </View>
                    </View>
                </View>
                <UserIcon color={"#00CCBB"} size={32} className="flex-1" />
            </View>
            {/* Header */}

            {/* search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
                    <MagnifyingGlassIcon color={"gray"} />
                    <TextInput
                        placeholder="Search for food or restaurants"
                        className="bg-gray-200"
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon color={"#00CCBB"} />
            </View>
            {/* search */}


            {/* body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* categories */}
                <Categories />

                {/* categories */}


                {/* featured rows */}
                {/* featured rows */}
            </ScrollView>
            {/* body */}
        </SafeAreaView>
    );
}