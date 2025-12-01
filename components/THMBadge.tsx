"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Zap, Target, Users } from "lucide-react";

interface THMData {
    rank: number;
    points: number;
    userRank: number;
    level: number;
    completedRooms: number;
    avatar: string;
    username: string;
}

export default function THMBadge() {
    const [data, setData] = useState<THMData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("https://tryhackme.com/api/v2/public-profile?username=illumn")
            .then((res) => res.json())
            .then((json) => {
                if (json.status === "success") {
                    setData(json.data);
                } else {
                    setError(true);
                }
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    if (error) {
        return (
            <div className="flex justify-center">
                <img
                    src="https://tryhackme-badges.s3.amazonaws.com/illumn.png"
                    alt="TryHackMe Badge"
                    className="h-auto w-full max-w-[400px]"
                />
            </div>
        );
    }

    if (loading) {
        return (
            <div className="mx-auto h-[200px] w-full max-w-[400px] animate-pulse rounded-2xl border border-surface0 bg-surface0/30"></div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-surface0 bg-surface0/30 p-6 transition-colors hover:bg-surface0/50 hover:border-mauve/30"
        >
            <div className="mb-6 flex items-center gap-4">
                <img
                    src={data?.avatar}
                    alt={data?.username}
                    className="h-16 w-16 rounded-full border-2 border-green"
                />
                <div>
                    <h3 className="text-xl font-bold text-foreground">@{data?.username}</h3>
                    <div className="flex items-center gap-2 text-sm text-green">
                        <span className="font-bold">Level {data?.level}</span>
                        <span className="h-1 w-1 rounded-full bg-surface1"></span>
                        <span>[0x8]</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-base/50 p-3">
                    <div className="mb-1 flex items-center gap-2 text-xs text-surface1">
                        <Trophy className="h-3 w-3" /> Rank
                    </div>
                    <div className="text-lg font-bold text-foreground">{data?.userRank.toLocaleString()}</div>
                </div>
                <div className="rounded-xl bg-base/50 p-3">
                    <div className="mb-1 flex items-center gap-2 text-xs text-surface1">
                        <Zap className="h-3 w-3" /> Points
                    </div>
                    <div className="text-lg font-bold text-foreground">{data?.points.toLocaleString()}</div>
                </div>
                <div className="rounded-xl bg-base/50 p-3">
                    <div className="mb-1 flex items-center gap-2 text-xs text-surface1">
                        <Target className="h-3 w-3" /> Rooms
                    </div>
                    <div className="text-lg font-bold text-foreground">{data?.completedRooms ?? "N/A"}</div>
                </div>
                <div className="rounded-xl bg-base/50 p-3">
                    <div className="mb-1 flex items-center gap-2 text-xs text-surface1">
                        <Users className="h-3 w-3" /> Percentile
                    </div>
                    <div className="text-lg font-bold text-foreground">Top 1%</div>
                </div>
            </div>
        </motion.div>
    );
}
