import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { fontSize } from "../contants";
import StoryList from "./StoryList/StoryList";
import React, { useEffect, useState } from 'react';
import axios from "axios";
function Home(props) {
    const [isLoading, setLoading] = useState(true);
    const [newStory, setNewStory] = useState([]);
    const [reviewStory, setReviewStory] = useState([]);
    const [fullStory, setFullStory] = useState([]);
    const [truyenVui, setTruyenVui] = useState([]);
    useEffect(() => {
        // Gọi API để lấy danh sách truyện mới
        axios.get('https://tieuthuyet.vn/api/truyen-moi')
            .then(response => {
                // Xử lý dữ liệu từ API
                setNewStory(response.data);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện đọc nhiều
        axios.get('https://tieuthuyet.vn/api/truyen-doc-nhieu')
            .then(response => {
                // Xử lý dữ liệu từ API
                setReviewStory(response.data);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện Full
        axios.get('https://tieuthuyet.vn/api/truyen-full')
            .then(response => {
                // Xử lý dữ liệu từ API
                setFullStory(response.data);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện vui
        axios.get('https://tieuthuyet.vn/api/the-loai/47')
        .then(response => {
            // Xử lý dữ liệu từ API
            setTruyenVui(response.data);
        })
        .catch(error => {
            console.error('Error fetching product list:', error);
        });
    }, []); // useEffect sẽ chạy một lần khi component được mount
    return <ScrollView>
        <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 4, backgroundColor: 'red', height: 200 }}>
            <TextInput style={{ backgroundColor: '#c7c4bb', borderRadius: 20, height: 45 }} placeholder="Nhập nội dung tìm kiếm" />
        </View>
        <StoryList heading="Tiểu Thuyết Mới Nhất" storyList={newStory} />
        <StoryList heading="Ai Cũng Thích Đọc" storyList={reviewStory} />
        <StoryList heading="Truyện Full" storyList={fullStory} />
        <StoryList heading="Truyện Vui" storyList={truyenVui} />
    </ScrollView>
}
export default Home;