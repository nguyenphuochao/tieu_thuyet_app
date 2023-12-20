import { View, Text, Image, ScrollView, TextInput, ActivityIndicator } from "react-native";
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
    const [baDaoTongDai, setBaDaoTongDai] = useState([]);
    const [trinhTham, setTrinhTham] = useState([]);
    const [tiemHiep, setTienHiep] = useState([]);
    const [xuyenKhong, setXuyenKhong] = useState([]);
    const [kiemHiep, setKiemHiep] = useState([]);
    const [theGioiThuBa, setTheGioiThuBa] = useState([]);
    const [kinhDi, setKinhDi] = useState([]);
    useEffect(() => {
        // Gọi API để lấy danh sách truyện mới
        axios.get('https://tieuthuyet.vn/api/truyen-moi')
            .then(response => {
                // Xử lý dữ liệu từ API
                setNewStory(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện đọc nhiều
        axios.get('https://tieuthuyet.vn/api/truyen-doc-nhieu')
            .then(response => {
                // Xử lý dữ liệu từ API
                setReviewStory(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện Full
        axios.get('https://tieuthuyet.vn/api/truyen-full')
            .then(response => {
                // Xử lý dữ liệu từ API
                setFullStory(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện vui
        axios.get('https://tieuthuyet.vn/api/the-loai/47')
            .then(response => {
                // Xử lý dữ liệu từ API
                setTruyenVui(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện bá đạo tổng đài
        axios.get('https://tieuthuyet.vn/api/the-loai/25')
            .then(response => {
                // Xử lý dữ liệu từ API
                setBaDaoTongDai(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện tiểu thuyết trinh thám
        axios.get('https://tieuthuyet.vn/api/the-loai/12')
            .then(response => {
                // Xử lý dữ liệu từ API
                setTrinhTham(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện tiểu thuyết tiên hiệp
        axios.get('https://tieuthuyet.vn/api/the-loai/28')
            .then(response => {
                // Xử lý dữ liệu từ API
                setTienHiep(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện tiểu thuyết xuyên không
        axios.get('https://tieuthuyet.vn/api/the-loai/31')
            .then(response => {
                // Xử lý dữ liệu từ API
                setXuyenKhong(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện tiểu thuyết kiếm hiệp
        axios.get('https://tieuthuyet.vn/api/the-loai/4')
            .then(response => {
                // Xử lý dữ liệu từ API
                setKiemHiep(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện tiểu thuyết thế giới thứ ba
        axios.get('https://tieuthuyet.vn/api/the-loai/22')
            .then(response => {
                // Xử lý dữ liệu từ API
                setTheGioiThuBa(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
        // Gọi API để lấy danh sách truyện tiểu thuyết kinh dị
        axios.get('https://tieuthuyet.vn/api/the-loai/24')
            .then(response => {
                // Xử lý dữ liệu từ API
                setKinhDi(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
    }, []); // useEffect sẽ chạy một lần khi component được mount
    // navigation
    const { navigation, route } = props;
    const {navigate,goBack} = navigation;
    // Chờ api nên hiện loading
    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return <ScrollView>
        <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 4, backgroundColor: 'red', height: 200 }}>
            <TextInput style={{ backgroundColor: '#c7c4bb', borderRadius: 20, height: 45 }} placeholder="Nhập nội dung tìm kiếm" />
        </View>
        <StoryList heading="Tiểu Thuyết Mới Nhất" onPress={()=>{navigate('StoryDetail')}} storyList={newStory} />
        <StoryList heading="Ai Cũng Thích Đọc" storyList={reviewStory} />
        <StoryList heading="Truyện Full" storyList={fullStory} />
        <StoryList heading="Truyện Vui" storyList={truyenVui} />
        <StoryList heading="Truyện Bá Đạo Tổng Đài" storyList={baDaoTongDai} />
        <StoryList heading="Tiểu Thuyết Trinh Thám" storyList={trinhTham} />
        <StoryList heading="Tiểu Thuyết Tiên Hiệp" storyList={tiemHiep} />
        <StoryList heading="Tiểu Thuyết Xuyên Không" storyList={xuyenKhong} />
        <StoryList heading="Tiểu Thuyết Kiếm Hiệp" storyList={kiemHiep} />
        <StoryList heading="Tiểu Thuyết Thế Giới Thứ Ba" storyList={theGioiThuBa} />
        <StoryList heading="Tiểu Thuyết Kinh Dị" storyList={kinhDi} />
    </ScrollView>
}
export default Home;