export default function Square({ bg, height, width, content }) {
    // const { bg, height, width, content } = obj;

    return (
        <div style={{
            backgroundColor: bg,
            height: height,
            width: width
        }}>
            {content}
        </div>
    )
}
