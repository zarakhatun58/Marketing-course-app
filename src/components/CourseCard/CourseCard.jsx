import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

interface CourseCardProps {
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CourseCard;
