import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { color, fontSize } from "../contants";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
function StoryDetail(props) {
    const [activeTab, setActiveTab] = useState('about');
    const openCity = (tabName) => {
        setActiveTab(tabName);
    };
    // navigation
    const { navigation, route } = props;
    const { navigate, goBack } = navigation;
    return <View style={{ flex: 100 }}>
        <View style={{ flex: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", height: 60, backgroundColor: '#25c9e6' }}>
                <TouchableOpacity onPress={() => { navigate('Home') }}><Icon name="chevron-left" color={"white"} size={20}></Icon></TouchableOpacity>
                <Text style={{ color: 'white', fontSize: fontSize.h6 }}>Đọc - Nghe Truyện</Text>
                <Icon name="envelope" color={"white"} size={20}></Icon>
            </View>
        </View>
        <View style={{ flex: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: color.default, paddingVertical: 20, marginTop: -10 }}>
                <Image style={{ width: 130, height: 150, borderRadius: 10 }} source={{ uri: 'https://tieuthuyet.vn/images/2023/11/neu-anh-thua-anh-se-cuoi-em.jpeg' }}></Image>
                <View>
                    <Text style={{ fontSize: fontSize.h5, fontWeight: "bold" }}>Cô Vợ Ngọt Ngào</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Tác giả: ABC</Text>
                    <Text style={{ fontSize: fontSize.h5 }}>Ngôn tình, tình cảm</Text>
                </View>
            </View>
        </View>
        <View style={{ flex: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 20, }}>
                <TouchableOpacity onPress={() => openCity('about')}>
                    <Text style={{ fontSize: fontSize.h5, color: activeTab == 'about' ? '#25c9e6' : 'grey', textAlign: 'center' }}>Giới Thiệu</Text>
                    <View style={{ height: 2, backgroundColor: activeTab == 'about' ? '#25c9e6' : 'grey', marginTop: 10, width: 150 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openCity('list')}>
                    <Text style={{ fontSize: fontSize.h5, color: activeTab == 'list' ? '#25c9e6' : 'grey', textAlign: 'center' }}>Danh Sách</Text>
                    <View style={{ height: 2, backgroundColor: activeTab == 'list' ? '#25c9e6' : 'grey', marginTop: 10, width: 150 }} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ flex: 47 }}>
            <ScrollView>
                {activeTab === 'about' && (<View style={{ flexDirection: 'row', padding: 10 }}>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontSize: fontSize.h5 }}>Tác phẩm:</Text>
                        <Text style={{ fontSize: fontSize.h5 }}>Tác giả:</Text>
                        <Text style={{ fontSize: fontSize.h5 }}>Thể loại:</Text>
                        <Text style={{ fontSize: fontSize.h5 }}>Tác phẩm:</Text>
                        <Text style={{ fontSize: fontSize.h5 }}>Số chương:</Text>
                        <Text style={{ fontSize: fontSize.h5 }}>Trạng thái</Text>
                        <Text style={{ fontSize: fontSize.h5 }}>Lượt xem:</Text>
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
                        <Text style={{ fontSize: fontSize.h5 }}>Chương 1: Mày còn trốn sao</Text>
                        <View style={{ height: 1, backgroundColor: '#b8c0c2', marginVertical: 5 }} />

                        <Text style={{ fontSize: fontSize.h5 }}>Chương 1: Mày còn trốn sao</Text>
                        <View style={{ height: 1, backgroundColor: '#b8c0c2', marginVertical: 5 }} />

                        <Text style={{ fontSize: fontSize.h5 }}>Chương 1: Mày còn trốn sao</Text>
                        <View style={{ height: 1, backgroundColor: '#b8c0c2', marginVertical: 5 }} />

                    </View>
                )}
                {activeTab === 'about' && (<View style={{ padding: 10 }}>
                    <Text style={{ fontSize: fontSize.h5, marginTop: 20 }}>Cửu Châu 18 tuổi, tính cách quật cường, thông minh sắc sảo. Cô là con gái út nhà họ Cửu. Vì chị gái Cửu Mạn Linh ham mê cờ bạc đã vay tiền nhà họ Lục mà cha mẹ cô nhẫn tâm đem cô gán nợ cho Lục lão gia làm vợ thứ 9 - người đáng tuổi ông của cô. Nhưng điều không ai ngờ tới là người kết hôn cùng cô không phải ông lão tuổi gần đất xa trời, mà là con trai út của ông, Thống Đốc quân Lục Nghị Phàm - kẻ đứng đầu và thâu tóm toàn bộ lực lượng quân đội liên quốc gia của nhiều nước.
                        Cuộc đời cô rồi sẽ raasddddddasddddddddddddddd Cuộc đời cô rồi sẽ raasddddddasddddddddddddddd Cuộc đời cô rồi sẽ raasddddddasddddddddddddddd Cuộc đời cô rồi sẽ raasddddddasddddddddddddddd Cuộc đời cô rồi sẽ raasddddddasddddddddddddddd sao? Những điều cô gặp phải có ngược tâm đến mức người đọc phải rơi lệ? Truyện được đăng tải tại tieuthuyet.vn, mời bạn đọc cùng theo
                    </Text>
                </View>)}
            </ScrollView>
        </View>
        <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity><Text style={{ fontSize: fontSize.h5, backgroundColor: color.primary, paddingVertical: 8, paddingHorizontal: 30, borderRadius: 20, color: 'white' }}>Đọc Truyện</Text></TouchableOpacity>
        </View>
    </View>
}
export default StoryDetail;