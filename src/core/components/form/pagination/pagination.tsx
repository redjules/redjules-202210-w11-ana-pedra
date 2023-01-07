export function Pagination({ handleBtnPrev }: { handleBtnPrev: () => void }) {
    return (
        <>
            <button type="button" onClick={handleBtnPrev}>
                Prev
            </button>
        </>
    );
}
