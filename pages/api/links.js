export default async function handler(req, res) {
    if (req.method === 'GET') {
        var Airtable = require('airtable');
        var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
            'apps2W7rEQ5GMV0Ea'
        );
        let mappedRecords = [];
        base('Table 1')
            .select({
                // Selecting the first 3 records in Grid view:
                maxRecords: 3,
                view: 'Grid view',
            })
            .eachPage(
                function page(records, fetchNextPage) {
                    // This function (`page`) will get called for each page of records.

                    const fetchedRecords = records.map((record) => ({
                        link: record.get('Links'),
                        label: record.get('Label'),
                    }));

                    mappedRecords = [...mappedRecords, ...fetchedRecords];
                    // To fetch the next page of records, call `fetchNextPage`.
                    // If there are more records, `page` will get called again.
                    // If there are no more records, `done` will get called.
                    fetchNextPage();
                },
                function done(err) {
                    res.status(200).json(mappedRecords);
                    if (err) {
                        console.error(err);
                        res.status(500).json(err);
                        return;
                    }
                }
            );
    }
}
