import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Offers = () => {
  return (
    <div className="w-full bg-gray-700 p-10 rounded-lg">
      <h3 className="text-xl text-white font-bold mb-6">OFFERS</h3>
      <div className="bg-black p-6 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center text-white">Name</TableHead>
              <TableHead className="text-center text-white">From</TableHead>
              <TableHead className="text-center text-white">Event</TableHead>
              <TableHead className="text-center text-white">Price</TableHead>
              <TableHead className="text-center text-white">Quantity</TableHead>
              <TableHead className="text-center text-white">
                Expiration
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
    </div>
  );
};

export default Offers;
