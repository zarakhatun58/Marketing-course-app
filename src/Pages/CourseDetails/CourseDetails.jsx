import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const CourseDetail = () => {
    const { id } = useParams();
    // Fetch the course details using the id
    // For now, we'll just use a placeholder
    const course = {
        title: "Sample Course",
        description: "Detailed description of the course.",
        duration: "4 weeks",
        price: "$199",
        instructor: "John Doe"
    };

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {course.title}
                </Typography>
                <Typography variant="body1">
                    {course.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Duration: {course.duration}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Price: {course.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Instructor: {course.instructor}
                </Typography>
            </Box>
        </Container>
    );
};

export default CourseDetail;
