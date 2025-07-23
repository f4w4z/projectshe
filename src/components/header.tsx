"use client"

import { Heart, Home, Lightbulb, Sparkles, Users } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Header() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/about', icon: Users },
        { name: 'Projects', url: '/projects', icon: Lightbulb },
        { name: 'Empower', url: '/empower', icon: Sparkles },
        { name: 'Donate', url: '/donate', icon: Heart }
    ];

    return <NavBar items={navItems} />;
}
