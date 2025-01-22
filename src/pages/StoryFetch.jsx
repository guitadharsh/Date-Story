import React, { useState, useEffect } from 'react';
import { numberApi } from '../service/numberApi';
import Story from '../components/Story';
import DateMonthPicker from '../components/DateMonthPicker';

/**
 * StoryFetcher component fetches and displays a story based on a selected date.
 * It includes a date picker and shows a loading state while fetching the story.
 *
 * @component
 * @example
 * return <StoryFetcher />
 *
 * @returns {JSX.Element} A component that displays the story and a date picker.
 */

const StoryFetcher = () => {
    const [story, setStory] = useState('');
    const [searchDate, setSearchDate] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false); 

    useEffect(() => {
        let isMounted = true; 

        const fetchStory = async () => {
            setIsLoading(true);
            setIsFetching(true); 
            
            try {
                const { day, month } = searchDate;
                if (day && month) {
                    const response = await numberApi(day, month);
                    if (response.status === 200 && isMounted) {
                        setStory(response.data);
                    }
                }
            } catch (error) {
                if (isMounted) {
                    setStory('Failed to fetch story.');
                }
            } finally {
                if (isMounted) {
                    setTimeout(() => {
                        setIsLoading(false);
                        setIsFetching(false);
                    }, 700);
                }
            }
        };

        if (searchDate.day && searchDate.month) {
            fetchStory();
        } else {
            setIsLoading(false);
            setIsFetching(false);
        }

        return () => {
            isMounted = false;
        };
    }, [searchDate]);

    return (
        <div className="storyfetcher">
            <div className="storyfetcher__header">
                <h1>Date Stories API</h1>
            </div>

            <div className="storyfetcher__body">
                <Story
                    story={story}
                    loading={isLoading}
                    isFetching={isFetching}
                />
                <DateMonthPicker
                    setSearchDate={setSearchDate}
                />
            </div>
        </div>
    );
};

export default StoryFetcher;
