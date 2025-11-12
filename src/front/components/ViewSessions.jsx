import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { CirclePlus, CalendarDays } from 'lucide-react';
import AddSession from "./AddSession";
import useGlobalReducer from "../hooks/useGlobalReducer";
import userServices from "../services/userServices";
import CardsStudents from "./CardsStudents";
import CardsMentoringsPending from "./CardsMentoringsPending";
import CardMentors from "./CardMentors";

const ViewSessions = () => {
    const { store, dispatch } = useGlobalReducer()
    const [mentorings, setMentorings] = useState()



    useEffect(() => {

        userServices.getMentoringsStudent(store?.user?.id).then(data => {
            if (!data) {
                console.log("No hay información Aun")
            }
            console.log(data)
            setMentorings(data)
        })

    }, []);

    const groupedByStudentObj = (Array.isArray(mentorings) ? mentorings : []).reduce(
        (acc, mentoring) => {
            const mentortId = mentoring.mentor_profile_id;
            if (!acc[mentortId]) {
                acc[mentortId] = {
                    mentor: mentoring.mentor_profile,
                    sessions: [],
                };
            }
            acc[mentortId].sessions.push(mentoring);
            return acc;
        },
        {}
    );

    const mentors = Object.values(groupedByStudentObj).map(item => item.mentor);
    const sessions = (Array.isArray(mentorings) ? mentorings : []);



    return (
        <>
            <div className=" mb-5 p-5">
                <div className="my-4">
                    <h2>Mis mentores</h2>
                </div>
                <div className="row">
                    {mentors && mentors.map((mentor) =>

                        <CardMentors mentor={mentor} />
                    )}
                </div>
            </div>
            <div className=" mb-5 p-5">
                <div className="my-4">
                    <h2>Sesiones pendientes:</h2>
                </div>
                <div className="row">
                    {sessions && sessions.filter(session =>
                        session.status === "scheduled").map(session => (
                            <CardsMentoringsPending key={session.id} session={session} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}



export default ViewSessions