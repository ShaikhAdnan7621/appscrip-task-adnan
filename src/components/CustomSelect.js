'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CustomSelect({ options, value, onChange }) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    const toggle = () => setOpen(!open);
    const handleSelect = (val) => {
        onChange(val);
        setOpen(false);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={wrapperRef} className="custom-select-wrapper">
            <button
                className="custom-select-trigger uppercase"
                onClick={toggle}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                {options.find((opt) => opt.value === value)?.label}
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrow ${open ? 'rotate-180' : ''}`}
                >
                    <path d="M6 8l4 4 4-4z" fill="#6b7280" />
                </svg>
            </button>

            {open && (
                <ul className="custom-select-dropdown" role="listbox">
                    {options.map((opt) => (
                        <li
                            key={opt.value}
                            className={`custom-select-option uppercase ${opt.value === value ? 'selected' : ''
                                }`}
                            onClick={() => handleSelect(opt.value)}
                            role="option"
                            aria-selected={opt.value === value}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
