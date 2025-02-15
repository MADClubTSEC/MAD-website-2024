import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DownloadTableRow from "@/components/DownloadTableRow";
import { BatchElement } from "@/app/dashboard/@railway/downloads/page";

interface DownloadTableProps {
  batches: BatchElement[];
  handleDownloadBatchExcel: (batch: BatchElement) => void;
  theme: string;
}

const DownloadTable: React.FC<DownloadTableProps> = ({ batches, handleDownloadBatchExcel, theme }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Sr No</TableHead>
          <TableHead>Filename</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Is Downloaded</TableHead>
          <TableHead>Downloded Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {batches.length > 0 ? (
          batches.map((batch, index) => (
            <DownloadTableRow
              key={index}
              srNo={index + 1}
              batch={batch}
              handleDownloadBatchExcel={handleDownloadBatchExcel}
              theme={theme}
            />
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} className="px-6 py-4 text-gray-600">No enquiries available.</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DownloadTable;