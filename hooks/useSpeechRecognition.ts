import { useState, useEffect, useCallback } from 'react';

export const useSpeechRecognition = () => {
	const [isListening, setIsListening] = useState(false);
	const [speechSupported, setSpeechSupported] = useState(false);

	useEffect(() => {
		if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
			setSpeechSupported(true);
		}
	}, []);

	const startListening = useCallback((onResult: (text: string) => void) => {
		if (!speechSupported) {
			console.error('Speech recognition is not supported in this browser.');
			return;
		}
		const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
		const recognition = new SpeechRecognition();

		recognition.continuous = true;
		recognition.interimResults = false; // Changed to false to only get final results

		recognition.onresult = (event) => {
			const finalTranscript = event.results[event.results.length - 1][0].transcript;
			onResult(finalTranscript);
		};

		recognition.onend = () => {
			setIsListening(false);
		};

		recognition.start();
		setIsListening(true);

		return recognition;
	}, [speechSupported]);

	return { isListening, speechSupported, startListening };
};
