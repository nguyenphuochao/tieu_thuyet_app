import { View, Text, Image } from "react-native";
import { fontSize } from "../../contants";
import StotyItem from "./StoryItem";
import React, { useState } from "react";
function StoryList(props) {
    const { heading, storyList = [] } = props
    return <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center', padding: 10 }}>
            <Text style={{ fontSize: fontSize.h5 }}>{heading}</Text>
            <Text style={{ fontSize: fontSize.h6 }}>Xem thêm</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingStart: 10 }}>
            {storyList.map(item =>
                <StotyItem key={item.id} name={item.name} image={item.image} />
            )}
        </View>
    </View>
}
export default StoryList;