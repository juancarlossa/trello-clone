import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { FormPopover } from "@/components/form/form-popover";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Navbar () {
  return (
    <nav className="flex justify-center">
      <div className="fixed z-50 top-0 w-11/12 h-14 border-b shadow-sm flex items-center">
        <MobileSidebar />
        <div className="flex items-center gap-x-4">
          <div className="hidden md:flex">
            <Logo />
          </div>
          <FormPopover align="start" side="bottom" sideOffset={18}>
            <Button variant={"primary"} size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2">
              Create
            </Button>
          </FormPopover>
          <FormPopover>
            <Button variant={"primary"} size="sm" className="rounded-sm block md:hidden">
              <Plus className="h-4 w-4" />
            </Button>
          </FormPopover>
        </div>

        <div className="ml-auto flex items-center gap-x-2">
          <ModeToggle />
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
                organizationSwitcherPopoverMain: "bg-list",
                cardBox: "bg-list",
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }
              }
            }}
          />
          <UserButton
            afterSwitchSessionUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
                userButtonPopoverMain: "bg-list"
              }
            }}
          />
        </div>
      </div>
    </nav>
  )
}