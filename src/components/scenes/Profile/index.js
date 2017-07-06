import React from 'react';
import '../../../style/profile.css';
import ProfileLayout from './layout';

export const Profile = ({ user }) => <ProfileLayout {...user} />;

export default Profile;
