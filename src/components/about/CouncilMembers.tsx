
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Building2, Flag, Users } from "lucide-react";

const CouncilMembers = () => {
  const members = [
    {
      name: "دولة رئيس الوزراء",
      position: "رئيس المجلس",
      sector: "القطاع الحكومي",
      icon: Building2
    },
    {
      name: "وزير التخطيط",
      position: "النائب الأول",
      sector: "القطاع الحكومي",
      icon: Flag
    },
    {
      name: "شاغر",
      position: "النائب الثاني",
      sector: "القطاع الخاص",
      note: "منصب شاغر بعد الانتخابات",
      icon: Users
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gov-blue mb-8 text-right">أعضاء المجلس</h2>
        
        <div className="mb-8">
          <img
            src="/lovable-uploads/8f5bb5e2-81a0-4d0c-b391-7674c76687ab.png"
            alt="اجتماع أعضاء مجلس تطوير القطاع الخاص"
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <p className="text-gov-darkgray text-center text-sm">اجتماع مجلس تطوير القطاع الخاص - 2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {members.map((member, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4">
                  <div className="w-20 h-20 rounded-full bg-gov-lightblue flex items-center justify-center">
                    <member.icon className="w-10 h-10 text-gov-blue" />
                  </div>
                </Avatar>
                <h3 className="text-lg font-semibold text-gov-blue mb-1">{member.name}</h3>
                <p className="text-gov-darkgray mb-2">{member.position}</p>
                <span className="text-sm text-gov-gold">{member.sector}</span>
                {member.note && (
                  <p className="text-xs text-gov-darkgray mt-2 italic">{member.note}</p>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gov-darkgray">
            يضم المجلس القيادات العليا من القطاعين العام والخاص لتحقيق التكامل والتنمية
          </p>
        </div>
      </div>
    </section>
  );
};

export default CouncilMembers;
