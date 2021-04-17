export default function testembed() {
    return (
        <div>
            <iframe
                id='typeform-full'
                title='Test Embed Application'
                width='100%'
                height='100%'
                frameBorder='0'
                allow='camera; microphone; autoplay; encrypted-media;'
                src='https://form.typeform.com/to/uj4OO3nW?typeform-medium=embed-snippet'
            ></iframe>

            <script
                type='text/javascript'
                src='https://embed.typeform.com/embed.js'
            ></script>

            <style jsx>{`
                html {
                    margin: 0;
                    height: 100%;
                    overflow: hidden;
                }
                iframe {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 0;
                    border: 0;
                }
            `}</style>
        </div>
    );
}
