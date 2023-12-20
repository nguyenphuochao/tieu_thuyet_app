import { View, Text, Image, TouchableOpacity } from "react-native";
import { color, fontSize } from "../../contants";
import StotyItem from "./StoryItem";
import React, { useState } from "react";
function StoryList(props) {
    const { heading, storyList = [], onPress } = props
    return <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <Text style={{ fontSize: fontSize.h5, fontWeight: 'bold', color: color.primary }}>{heading}</Text>
            <TouchableOpacity><Text style={{ fontSize: fontSize.h6, color: color.primary, borderRadius: 10, borderWidth: 1, borderColor: color.primary, paddingHorizontal: 5 }}>Xem thêm</Text></TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingStart: 10 }}>
            {storyList.map(item =>
                <StotyItem key={item.id} name={item.name} image={item.image} onPress={onPress} />
            )}
        </View>
    </View>
}
export default StoryList;