import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = ({
                ...action.payload,
                quizIds: []
            });
        }
    }
});

export const selectTopic = (state) => state.topics;
