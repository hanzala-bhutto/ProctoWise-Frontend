import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

const JoinToggler = () => {
  return (
    <Tabs defaultValue="agreement" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="agreement">Agreement</TabsTrigger>
        <TabsTrigger value="payment">Payment</TabsTrigger>
        <TabsTrigger value="invite">Invite</TabsTrigger>
      </TabsList>
      <TabsContent value="agreement">
        <Card>
          <CardHeader>
            <CardTitle>Agreement</CardTitle>
            <CardDescription>
              Make sure to properly read the agreement provided.
              <p className="text-gray-800 my-2">
                Participants must adhere to the established code of conduct,
                fostering a respectful and inclusive environment for all.
              </p>
              <p className="font-bold my-2">Submission Guidelines:</p>
              <ul className="list-disc ml-8">
                <li>Follow specified code format and naming conventions.</li>
                <li>
                  Include all required documentation with your submission.
                </li>
              </ul>
              <p className="text-red-500 my-2">
                Participants must ensure the authenticity of their work and
                refrain from plagiarism or unfair practices.
              </p>
              <p className="font-medium my-2">Evaluation Criteria:</p>
              <ul className="list-disc ml-8">
                <li>Code functionality and correctness.</li>
                <li>Efficiency and optimization of the solution.</li>
              </ul>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="payment">
        <Card>
          <CardHeader>
            <CardTitle>Make Payment</CardTitle>
            <CardDescription>
              To secure your participation in the coding competition, please
              complete the payment process below. Kindly review the details and
              follow the instructions carefully. If you encounter any issues or
              have questions, feel free to reach out to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="font-bold text-lg my-2">Payment Amount: $XX.XX USD</p>
            <p className="my-2">Accepted Payment Methods:</p>
            <ul className="list-disc ml-8">
              <li>Credit/Debit Card</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Pay by Card</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="invite">
        <Card>
          <CardHeader>
            <CardTitle>Want to Invite Members?</CardTitle>
            <CardDescription>
              You can invite your members by inviting them
            </CardDescription>
          </CardHeader>

          <CardFooter>
            <Button>Invite Member</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default JoinToggler;
