import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { fontSize } from "../contants";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
function StoryDetail(props) {
    const [activeTab, setActiveTab] = useState('about');
    const openCity = (tabName) => {
        setActiveTab(tabName);
    };
    return <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", height: 60, backgroundColor: '#25c9e6' }}>
            <Icon name="chevron-left" size={20}></Icon>
            <Text style={{ color: 'white', fontSize: fontSize.h6 }}>Đọc - Nghe Truyện</Text>
            <Icon name="envelope" size={20}></Icon>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <Image style={{ width: 130, height: 150, borderRadius: 10 }} source={{ uri: 'https://tieuthuyet.vn/images/2023/11/neu-anh-thua-anh-se-cuoi-em.jpeg' }}></Image>
            <View>
                <Text style={{ fontSize: fontSize.h5, fontWeight: "bold" }}>Cô Vợ Ngọt Ngào</Text>
                <Text style={{ fontSize: fontSize.h5 }}>Tác giả: ABC</Text>
                <Text style={{ fontSize: fontSize.h5 }}>Ngôn tình, tình cảm</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 20 }}>
            <TouchableOpacity onPress={() => openCity('about')}><Text style={{ fontSize: fontSize.h5,color: activeTab=='about' ? '#25c9e6' : 'grey' }}>Giới Thiệu</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => openCity('list')}><Text style={{ fontSize: fontSize.h5,color: activeTab=='list' ? '#25c9e6' : 'grey' }}>Danh Sách</Text></TouchableOpacity>
        </View>
        <ScrollView>
            {activeTab === 'about' && (<View style={{ flexDirection: 'row' }}>
                <View style={{ width: '30%' }}>
                    <Text style={{ fontSize: fontSize.h5 }}>Tác phẩm:</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Tác phẩm:</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Tác phẩm:</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Tác phẩm:</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Tác phẩm:</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Tác phẩm:</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Tác phẩm:</Text>
                </View>
                <View style={{ width: '70%' }}>
                    <Text style={{ fontSize: fontSize.h5 }}>Cô Vợ Ngọt Ngào</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Cô Vợ Ngọt Ngào</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Cô Vợ Ngọt Ngào</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Cô Vợ Ngọt Ngào</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Cô Vợ Ngọt Ngào</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Cô Vợ Ngọt Ngào</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Cô Vợ Ngọt Ngào</Text>
                </View>
            </View>
            )}
            {activeTab === 'list' && (
                <View>
                    <Text style={{fontSize:fontSize.h5}}>Chương 1: Mày còn trốn sao</Text>
                    <View style={{height:1,backgroundColor:'#b8c0c2',marginVertical: 5}}/>

                    <Text style={{fontSize:fontSize.h5}}>Chương 1: Mày còn trốn sao</Text>
                    <View style={{height:1,backgroundColor:'#b8c0c2',marginVertical: 5}}/>

                    <Text style={{fontSize:fontSize.h5}}>Chương 1: Mày còn trốn sao</Text>
                    <View style={{height:1,backgroundColor:'#b8c0c2',marginVertical: 5}}/>
                </View>
            )}
            <Text style={{ fontSize: fontSize.h5, marginTop: 20 }}>Cửu Châu 18 tuổi, tính cách quật cường, thông minh sắc sảo. Cô là con gái út nhà họ Cửu. Vì chị gái Cửu Mạn Linh ham mê cờ bạc đã vay tiền nhà họ Lục mà cha mẹ cô nhẫn tâm đem cô gán nợ cho Lục lão gia làm vợ thứ 9 - người đáng tuổi ông của cô. Nhưng điều không ai ngờ tới là người kết hôn cùng cô không phải ông lão tuổi gần đất xa trời, mà là con trai út của ông, Thống Đốc quân Lục Nghị Phàm - kẻ đứng đầu và thâu tóm toàn bộ lực lượng quân đội liên quốc gia của nhiều nước.
                Cuộc đời cô rồi sẽ ra sao? Những điều cô gặp phải có ngược tâm đến mức người đọc phải rơi lệ? Truyện được đăng tải tại tieuthuyet.vn, mời bạn đọc cùng theo</Text>
        </ScrollView>
    </View>
}
export default StoryDetail;