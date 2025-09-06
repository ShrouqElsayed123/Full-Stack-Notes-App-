import { Pin, Edit2, Trash2, PinOff } from "lucide-react";
import { useEffect, useState } from "react";
import NoteEditModal from "../NoteEditModal/NoteEditModal";

const colors = [
    "bg-red-50",
    "bg-green-50",
    "bg-blue-50",
    "bg-yellow-50",
    "bg-purple-50",
    "bg-pink-50",
];

const initialNotes = [
    {
        id: 1,
        title: "Practice Mindfulness Meditation",
        date: "6th Apr 2024",
        content: "In today's fast-paced world, it's easy to feel overwhelmed...",
        tags: ["Meditation", "Mindfulness"],
        pinned: false,
    },
    {
        id: 2,
        title: "Volunteer at Local Shelter",
        date: "6th Apr 2024",
        content: "Giving back to the community is important to me, so today I...",
        tags: ["Volunteer", "Community"],
        pinned: true,
    },
    {
        id: 3,
        title: "Prepare for Interview",
        date: "6th Apr 2024",
        content: "Tomorrow I have an important interview scheduled...",
        tags: ["Interview", "Preparation"],
        pinned: false,
    },
    {
        id: 4,
        title: "Prepare for Interview",
        date: "6th Apr 2024",
        content: "Tomorrow I have an important interview scheduled...",
        tags: ["Interview", "Preparation"],
        pinned: false,
    },
    {
        id: 5,
        title: "Prepare for Interview",
        date: "6th Apr 2024",
        content: "Tomorrow I have an important interview scheduled...",
        tags: ["Interview", "Preparation"],
        pinned: false,
    },
    {
        id: 6,
        title: "Prepare for Interview",
        date: "6th Apr 2024",
        content: "Tomorrow I have an important interview scheduled...",
        tags: ["Interview", "Preparation"],
        pinned: false,
    },
];
export default function NoteCard() {
    const [notes, setNotes] = useState(() => {
        // 👇 أول مرة الكومبوننت يشتغل → نحاول نقرأ من localStorage
        const saved = localStorage.getItem("notes");
        return saved ? JSON.parse(saved) : initialNotes;
    });

    // 👇 أي وقت notes تتغير → نحفظ في localStorage
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    //   pin 

    const togglePin = (id) => {
        setNotes(prev =>
            prev.map(note => (note.id === id ? { ...note, pinned: !note.pinned } : note))
        );
    };

    // حماية لو notes مش array لأي سبب
    const ordered = Array.isArray(notes)
        ? [...notes.filter(n => n.pinned), ...notes.filter(n => !n.pinned)]
        : [];


    // edittttttttttttttt
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [savedNote, setSavedNote] = useState(null)
    const handleEdit = (note) => {
        setIsModalOpen(true);
        setSavedNote(note)
    }
    return (
        <>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {ordered.map((note) => (
                        <div key={note.id}
                            className={`rounded-md shadow-sm p-4 flex flex-col justify-between ${colors[note.id % colors.length]}`}
                        >
                            {/* header & pin */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <p>{note.id}</p>
                                    <h1>{note.title}</h1>
                                    <p>{note.date}</p>
                                </div>

                                {/* مهم: type="button" علشان مايعملش submit */}
                                <button type="button" onClick={() => togglePin(note.id)}>
                                    {note.pinned ? <PinOff size={16} /> : <Pin size={16} />}
                                </button>
                            </div>

                            <div>
                                <p>{note.content}</p>
                            </div>

                            <div className="mt-2 flex flex-wrap gap-1">
                                {note.tags.map((tag, i) => (
                                    <span key={i} className="text-xs text-mainColor bg-blue-100 px-2 py-0.5 rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end gap-2 mt-3">
                                <button type="button" className="text-gray-400 hover:text-gray-600"
                                    onClick={() => {
                                        handleEdit(note)
                                    }}
                                ><Edit2 size={16} /></button>
                                <button type="button" className="text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


            <NoteEditModal
                isOpen={isModalOpen}
                note={savedNote}
            />
        </>
    )
}
