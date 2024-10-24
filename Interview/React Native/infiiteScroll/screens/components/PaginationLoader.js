import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const PaginationLoader = ({ isLoader = false }) => {
    return (
        <>
            {isLoader && <ActivityIndicator />}
        </>
    )
}

export default PaginationLoader