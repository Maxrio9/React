import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: []
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics.push({
                ...action.payload,
                quizIds: []
            });
        }
    }
});