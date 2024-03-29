import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { New } from '../pages/new';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Details/:id" element={<Details />} />
        </Routes>
    )
}