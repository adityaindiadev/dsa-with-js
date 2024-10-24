import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ListView from './components/ListView'
import PaginationLoader from './components/PaginationLoader'

const InfiniteScroll = () => {

    const page = useRef(1)

    const [paginationData, setPaginationData] = useState()

    const [paginationLoader, setPaginationLoader] = useState(true)



    const [data, setData] = useState([])

    async function callAPI() {

        const baseURI = `https://reqres.in/api/users?page=${page.current}`

        console.log(baseURI);

        try {
            const res = await fetch(baseURI)
            const responseJSON = await res.json()
            console.log("responseJSON");
            console.log({responseJSON});
            page.current = page.current + 1
            setPaginationData(responseJSON)
            setData((curr)=> [...curr, ...responseJSON?.data])

        } catch (error) {
            console.error("Error: ", error);

        }
        finally{
            setPaginationLoader(false)
        }
    }

    function renderItem({ item, index }) {

        // console.log({ item, index });
        const { email,
            first_name,
            last_name,
            avatar } = item

        return (
            <ListView email={email} first_name={first_name} avatar={avatar} last_name={last_name} />
        )
    }

    useEffect(() => {

        callAPI()

    }, [])

    function onEndReached() {
        console.log("onEndReached", { "page.current": page.current, "paginationData?.total_pages": paginationData?.total_pages });
        if (page.current == 1) {
            console.log("page.current == 1", "return" );
            
            return
        }

        if (page.current > paginationData?.total_pages) {
            return
        }

        if (paginationLoader) {
            return
        }
        setPaginationLoader(false)
        callAPI()



    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.container}>
                <Text style={styles.title}>InfiniteScroll</Text>

                <FlatList data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, _) => item.id}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={<PaginationLoader isLoader={paginationLoader}/>}
                />
            </View>
        </SafeAreaView>
    )
}

export default InfiniteScroll

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        // flex:1,
        // backgroundColor: 'red',
        padding: 20,
        // justifyContent: 'center'
        // alignItems: 'center'
    },
    title:{
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 20
    }

})