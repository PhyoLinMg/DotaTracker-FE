import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function RulesSection() {
  return (
    <section id="rules" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Hook Tracking Rules</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Simple and fair rules for tracking your Pudge hook performance
          </p>
        </div>

        <Alert className="mb-12 border-red-800 bg-red-950/30 max-w-4xl mx-auto backdrop-blur-sm">
          <AlertCircle className="h-5 w-5 text-red-400" />
          <AlertTitle className="text-red-300 font-bold text-lg">Important Rules</AlertTitle>
          <AlertDescription className="text-red-200 space-y-2 text-base">
            <p>
              Hook hits are only counted when they connect with enemy heroes. Hooks that connect with creeps will not be
              counted.
            </p>
            <p>
              Currently, only standard hooks are being tracked. Additional hook categories will be available in future
              updates.
            </p>
          </AlertDescription>
        </Alert>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          <Card className="bg-white border-gray-300 shadow-xl">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-gray-900 text-2xl font-bold">Hook Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 border-green-600 text-green-700 bg-green-50 font-medium">
                  Standard Hook
                </Badge>
                <div>
                  <p className="font-bold text-gray-900 text-base">Basic successful hook on an enemy hero</p>
                  <p className="text-sm text-gray-600">1 point per successful hook</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1 bg-gray-200 text-gray-600 font-medium">
                  Coming Soon
                </Badge>
                <div>
                  <p className="font-medium text-gray-600">Blind Hook</p>
                  <p className="text-sm text-gray-500">Hook landed without direct vision of the target</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1 bg-gray-200 text-gray-600 font-medium">
                  Coming Soon
                </Badge>
                <div>
                  <p className="font-medium text-gray-600">Fountain Hook</p>
                  <p className="text-sm text-gray-500">Hook that pulls an enemy into your fountain</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-300 shadow-xl">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-gray-900 text-2xl font-bold">Submission Requirements</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
              
                <AccordionItem value="item-2" className="border-gray-200">
                  <AccordionTrigger className="text-gray-900 hover:text-gray-700 font-bold text-base">
                    Match Information
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    We will need to know the match id, and the rest will be handled by the system to figure out the hook. 
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-gray-200">
                  <AccordionTrigger className="text-gray-900 hover:text-gray-700 font-bold text-base">
                    Success Rate Calculation
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    Success rate is calculated as (Successful Hero Hooks ÷ Total Hook Attempts) × 100%. Remember, only
                    hooks that connect with enemy heroes count as successful.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-white border-gray-300 max-w-4xl mx-auto shadow-xl">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-gray-900 text-2xl font-bold">Verification Process</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="mb-6 text-gray-700 text-base leading-relaxed">
              All hook submissions will be run through a system-verification process using the OpenDota API and replay parser.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-base">
              <li>The system can be failed due to the limitations of the OpenDota API and others factors.</li>
              <li>The hook must be a standard hook.</li> 
              <li>If you want to know the details, please look at <a href="" className="text-blue-600 hover:underline">here</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
