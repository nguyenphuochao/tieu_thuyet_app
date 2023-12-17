import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { fontSize } from "../contants";
import StoryList from "./StoryList/StoryList";
import { useState } from "react";
function Home() {
    const [newStory, setNewStory] = useState([
        {
            id: 1,
            name: 'Tình Sắc Khó Cưỡng',
            image: 'https://tieuthuyet.vn/images/2023/12/sac-tinh-kho-cuong.jpeg'
        },
        {
            id: 2,
            name: 'Mộng Tình',
            image: 'https://tieuthuyet.vn/images/2023/12/mong-tinh.jpeg'
        },
        {
            id: 3,
            name: 'Vụng Trộm Không Thể Dấu',
            image: 'https://tieuthuyet.vn/images/2023/12/vung-trom-khong-the-giau.jpeg'
        }
    ]);
    const [reviewStory, setReviewStory] = useState([
        {
            id: 1,
            name: 'Đế Tôn',
            image: 'https://tieuthuyet.vn/images/2023/10/de-ton.jpeg'
        },
        {
            id: 2,
            name: 'Mộng Tình',
            image: 'https://tieuthuyet.vn/images/2023/10/ky-duyen-tuong-ngo.jpeg'
        },
        {
            id: 3,
            name: 'Thần Ma Thiên Tôn',
            image: 'https://tieuthuyet.vn/images/2023/11/than-ma-thien-ton.jpeg'
        }
    ]);
    return <ScrollView>
        <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 4, backgroundColor: 'red', height: 200 }}>
            <TextInput style={{ backgroundColor: '#c7c4bb', borderRadius: 20, height: 45 }} placeholder="Nhập nội dung tìm kiếm" />
        </View>
        <StoryList heading="Tiểu Thuyết Mới Nhất" storyList={newStory} />
        <StoryList heading="Ai Cũng Thích Đọc" storyList={reviewStory} />
        <StoryList heading="Truyện FULL" />
    </ScrollView>
}
export default Home;