import { THEME_COLOR } from "../Theme";
import NETWORK_IMAGE from "../../Assets/Images/network.jpg";
import LAN_ICON from "../../Assets/Icons/lan.svg";
import WAN_ICON from "../../Assets/Icons/wan.svg";
import WAM_ICON from "../../Assets/Icons/wireless.svg";
import MISC_ICON from "../../Assets/Icons/misc.svg";
import POPULAR_ICON from "../../Assets/Icons/popular.svg";

import SECURITY_MAIN_IMAGE from "../../Assets/Images/security.jpg";

import DATA_CENTER_SECURITY_IMAGE from "../../Assets/Images/data-center-security.jpg";

export const NAVBAR_MENUS = {
  IT_INFRASTRUCTURE: {
    label: "IT Infrastructure",
    value: "IT_INFRASTRUCTURE",
    isMore: false,
    menus: {
      NETWORK_WIRED_AND_WIRELESS: {
        label: "NETWORK WIRED AND WIRELESS",
        value: "NETWORK_WIRED_AND_WIRELESS",
        menus: {
          image: NETWORK_IMAGE,
          title: "NETWORK",
          color: THEME_COLOR.color_4,
          subtitle: `Implement enterprise-class connectivity for wired and wireless.Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --LAN --
            LAN: {
              label: "LAN",
              value: "LAN",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                ROUTING: {
                  label: "Routing",
                  value: "ROUTING",
                  path: "/lan/routing",
                },
                SWITCHING: {
                  label: "Switching",
                  value: "SWITCHING",
                  path: "/lan/switching",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/lan/software-denied-networking",
                },
                CMN: {
                  label: "Cloud Managed Network",
                  value: "CMN",
                  path: "/lan/Cloud-Managed-Network",
                },
                IBN: {
                  label: "Intent-based Networking",
                  value: "IBN",
                  path: "/lan/Intent-based-Networking",
                },
                AI: {
                  label: "Artificial Intelligence for IT Operations",
                  value: "AI",
                  path: "/lan/Cloud-Managed-Network",
                },
              },
            },
            // --Wan--
            WAN: {
              label: "WAN",
              value: "WAN",
              shaded: false,
              icon: WAN_ICON,
              image: WAN_ICON,
              menus: {
                SD_WAN: {
                  label: "SD WAN",
                  value: "SD_WAN",
                  path: "/wan/sd-wan",
                },
                SASE: {
                  label: "SASE",
                  value: "SASE",
                  path: "/wan/SASE",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/wan/software-denied-networking",
                },
                VPN: {
                  label: "Virtual Private Network",
                  value: "VPN",
                  path: "/wan/virtual-private-network",
                },
              },
            },

            //--Wireless and mobility --
            WAM: {
              label: "Wireless & Mobility",
              value: "WAM",
              shaded: false,
              icon: WAM_ICON,
              image: WAM_ICON,
              menus: {
                WI_FI_6: {
                  label: "Wi-Fi-6",
                  value: "WI_FI_6",
                  path: "/wireless-and-mobility/wi-fi-6",
                },
                UNIFIED_WIRELESS: {
                  label: "Unified Wireless",
                  value: "UNIFIED_WIRELESS",
                  path: "/wireless-and-mobility/Unified-Wireless",
                },
                ENTERPRISE_WIRELESS: {
                  label: "Enterprise Wireless",
                  value: "ENTERPRISE_WIRELESS",
                  path: "/wireless-and-mobility/Enterprise-Wireless",
                },
                LBS: {
                  label: "Location Based Services",
                  value: "LBS",
                  path: "/wireless-and-mobility/Location-Based-Services",
                },
                CMW: {
                  label: "Cloud Managed wireless",
                  value: "CMW",
                  path: "/wireless-and-mobility/Cloud-Managed-wireless",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                OOB_MANAGEMENT: {
                  label: "OOB Management",
                  value: "OOB_MANAGEMENT",
                  path: "/miscellaneous/OOB-Management",
                },
                AMH: {
                  label: "Automated Monitoring & Helpdesk",
                  value: "AMH",
                  path: "/miscellaneous/Automated-Monitoring-Helpdesk",
                },
                TELEMETRY: {
                  label: "Telemetry",
                  value: "TELEMETRY",
                  path: "/miscellaneous/Telemetry",
                },
                OA: {
                  label: "Orchestration and Automation",
                  value: "OA",
                  path: "/miscellaneous/Orchestration-and-Automation",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                //______
                // -- Cisco DNA
                CISCO_DNA_2: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA_2",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN_2: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN_2",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI_2: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI_2",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS_2: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS_2",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS_2: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS_2",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL_2: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL_2",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC_2",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                //______
              },
            },
          },
        },
      },

      /**
       * Security and cyber Security
       */
      SECURITY_AND_CYBER_SECURITY: {
        label: "SECURITY AND CYBERSECURITY",
        value: "SECURITY_AND_CYBER_SECURITY",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_3N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * DATA CENTER AND VIRTUALIZATION
       */
      DATA_CENTER_AND_VIRTUALIZATION: {
        label: "DATA CENTER AND VIRTUALIZATION",
        value: "DATA_CENTER_AND_VIRTUALIZATION",
        menus: {
          image: DATA_CENTER_SECURITY_IMAGE,
          title: "Data Center Security",
          security_red: THEME_COLOR.data_center_security,
          subtitle: `Data Center Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },

            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2NN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * COLLABORATION AND PRODUCTIVITY
       */
      CAB: {
        label: "COLLABORATION AND PRODUCTIVITY ",
        value: "CAB",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * SERVICE PROVIDER
       */
      SP: {
        label: "SERVICE PROVIDER ",
        value: "SP",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2NN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
      /**
       * CLOUD AND COMPUTING
       */
      CAC: {
        label: "CLOUD AND COMPUTING ",
        value: "CAC",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2NN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
      /**
       * INTERNET OF THINGS
       */
      IOT: {
        label: "INTERNET OF THINGS (IoT) ",
        value: "IOT",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
    },
  },
  DND: {
    label: "DevOps & Deployment ",
    value: "DND",
    isMore: false,
    menus: {
      NETWORK_WIRED_AND_WIRELESS: {
        label: "NETWORK WIRED AND WIRELESS",
        value: "NETWORK_WIRED_AND_WIRELESS",
        menus: {
          image: NETWORK_IMAGE,
          title: "NETWORK",
          color: THEME_COLOR.color_4,
          subtitle: `Implement enterprise-class connectivity for wired and wireless.Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --LAN --
            LAN: {
              label: "LAN",
              value: "LAN",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                ROUTING: {
                  label: "Routing",
                  value: "ROUTING",
                  path: "/lan/routing",
                },
                SWITCHING: {
                  label: "Switching",
                  value: "SWITCHING",
                  path: "/lan/switching",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/lan/software-denied-networking",
                },
                CMN: {
                  label: "Cloud Managed Network",
                  value: "CMN",
                  path: "/lan/Cloud-Managed-Network",
                },
                IBN: {
                  label: "Intent-based Networking",
                  value: "IBN",
                  path: "/lan/Intent-based-Networking",
                },
                AI: {
                  label: "Artificial Intelligence for IT Operations",
                  value: "AI",
                  path: "/lan/Cloud-Managed-Network",
                },
              },
            },
            // --Wan--
            WAN: {
              label: "WAN",
              value: "WAN",
              shaded: false,
              icon: WAN_ICON,
              image: WAN_ICON,
              menus: {
                SD_WAN: {
                  label: "SD WAN",
                  value: "SD_WAN",
                  path: "/wan/sd-wan",
                },
                SASE: {
                  label: "SASE",
                  value: "SASE",
                  path: "/wan/SASE",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/wan/software-denied-networking",
                },
                VPN: {
                  label: "Virtual Private Network",
                  value: "VPN",
                  path: "/wan/virtual-private-network",
                },
              },
            },

            //--Wireless and mobility --
            WAM: {
              label: "Wireless & Mobility",
              value: "WAM",
              shaded: false,
              icon: WAM_ICON,
              image: WAM_ICON,
              menus: {
                WI_FI_6: {
                  label: "Wi-Fi-6",
                  value: "WI_FI_6",
                  path: "/wireless-and-mobility/wi-fi-6",
                },
                UNIFIED_WIRELESS: {
                  label: "Unified Wireless",
                  value: "UNIFIED_WIRELESS",
                  path: "/wireless-and-mobility/Unified-Wireless",
                },
                ENTERPRISE_WIRELESS: {
                  label: "Enterprise Wireless",
                  value: "ENTERPRISE_WIRELESS",
                  path: "/wireless-and-mobility/Enterprise-Wireless",
                },
                LBS: {
                  label: "Location Based Services",
                  value: "LBS",
                  path: "/wireless-and-mobility/Location-Based-Services",
                },
                CMW: {
                  label: "Cloud Managed wireless",
                  value: "CMW",
                  path: "/wireless-and-mobility/Cloud-Managed-wireless",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                OOB_MANAGEMENT: {
                  label: "OOB Management",
                  value: "OOB_MANAGEMENT",
                  path: "/miscellaneous/OOB-Management",
                },
                AMH: {
                  label: "Automated Monitoring & Helpdesk",
                  value: "AMH",
                  path: "/miscellaneous/Automated-Monitoring-Helpdesk",
                },
                TELEMETRY: {
                  label: "Telemetry",
                  value: "TELEMETRY",
                  path: "/miscellaneous/Telemetry",
                },
                OA: {
                  label: "Orchestration and Automation",
                  value: "OA",
                  path: "/miscellaneous/Orchestration-and-Automation",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                //______
                // -- Cisco DNA
                CISCO_DNA_2: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA_2",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN_2: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN_2",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI_2: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI_2",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS_2: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS_2",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS_2: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS_2",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL_2: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL_2",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC_2",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                //______
              },
            },
          },
        },
      },

      /**
       * Security and cyber Security
       */
      SECURITY_AND_CYBER_SECURITY: {
        label: "SECURITY AND CYBERSECURITY",
        value: "SECURITY_AND_CYBER_SECURITY",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * DATA CENTER AND VIRTUALIZATION
       */
      DATA_CENTER_AND_VIRTUALIZATION: {
        label: "DATA CENTER AND VIRTUALIZATION",
        value: "DATA_CENTER_AND_VIRTUALIZATION",
        menus: {
          image: DATA_CENTER_SECURITY_IMAGE,
          title: "Data Center Security",
          security_red: THEME_COLOR.data_center_security,
          subtitle: `Data Center Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },

            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * COLLABORATION AND PRODUCTIVITY
       */
      CAB: {
        label: "COLLABORATION AND PRODUCTIVITY ",
        value: "CAB",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * SERVICE PROVIDER
       */
      SP: {
        label: "SERVICE PROVIDER ",
        value: "SP",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
      /**
       * CLOUD AND COMPUTING
       */
      CAC: {
        label: "CLOUD AND COMPUTING ",
        value: "CAC",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
      /**
       * INTERNET OF THINGS
       */
      IOT: {
        label: "INTERNET OF THINGS (IoT) ",
        value: "IOT",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
    },
  },
  SERVICES: {
    label: "Services",
    value: "SERVICES",
    isMore: false,
    menus: {
      NETWORK_WIRED_AND_WIRELESS: {
        label: "NETWORK WIRED AND WIRELESS",
        value: "NETWORK_WIRED_AND_WIRELESS",
        menus: {
          image: NETWORK_IMAGE,
          title: "NETWORK",
          color: THEME_COLOR.color_4,
          subtitle: `Implement enterprise-class connectivity for wired and wireless.Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --LAN --
            LAN: {
              label: "LAN",
              value: "LAN",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                ROUTING: {
                  label: "Routing",
                  value: "ROUTING",
                  path: "/lan/routing",
                },
                SWITCHING: {
                  label: "Switching",
                  value: "SWITCHING",
                  path: "/lan/switching",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/lan/software-denied-networking",
                },
                CMN: {
                  label: "Cloud Managed Network",
                  value: "CMN",
                  path: "/lan/Cloud-Managed-Network",
                },
                IBN: {
                  label: "Intent-based Networking",
                  value: "IBN",
                  path: "/lan/Intent-based-Networking",
                },
                AI: {
                  label: "Artificial Intelligence for IT Operations",
                  value: "AI",
                  path: "/lan/Cloud-Managed-Network",
                },
              },
            },
            // --Wan--
            WAN: {
              label: "WAN",
              value: "WAN",
              shaded: false,
              icon: WAN_ICON,
              image: WAN_ICON,
              menus: {
                SD_WAN: {
                  label: "SD WAN",
                  value: "SD_WAN",
                  path: "/wan/sd-wan",
                },
                SASE: {
                  label: "SASE",
                  value: "SASE",
                  path: "/wan/SASE",
                },
                SDN: {
                  label: "Software Denied Networking",
                  value: "SDN",
                  path: "/wan/software-denied-networking",
                },
                VPN: {
                  label: "Virtual Private Network",
                  value: "VPN",
                  path: "/wan/virtual-private-network",
                },
              },
            },

            //--Wireless and mobility --
            WAM: {
              label: "Wireless & Mobility",
              value: "WAM",
              shaded: false,
              icon: WAM_ICON,
              image: WAM_ICON,
              menus: {
                WI_FI_6: {
                  label: "Wi-Fi-6",
                  value: "WI_FI_6",
                  path: "/wireless-and-mobility/wi-fi-6",
                },
                UNIFIED_WIRELESS: {
                  label: "Unified Wireless",
                  value: "UNIFIED_WIRELESS",
                  path: "/wireless-and-mobility/Unified-Wireless",
                },
                ENTERPRISE_WIRELESS: {
                  label: "Enterprise Wireless",
                  value: "ENTERPRISE_WIRELESS",
                  path: "/wireless-and-mobility/Enterprise-Wireless",
                },
                LBS: {
                  label: "Location Based Services",
                  value: "LBS",
                  path: "/wireless-and-mobility/Location-Based-Services",
                },
                CMW: {
                  label: "Cloud Managed wireless",
                  value: "CMW",
                  path: "/wireless-and-mobility/Cloud-Managed-wireless",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                OOB_MANAGEMENT: {
                  label: "OOB Management",
                  value: "OOB_MANAGEMENT",
                  path: "/miscellaneous/OOB-Management",
                },
                AMH: {
                  label: "Automated Monitoring & Helpdesk",
                  value: "AMH",
                  path: "/miscellaneous/Automated-Monitoring-Helpdesk",
                },
                TELEMETRY: {
                  label: "Telemetry",
                  value: "TELEMETRY",
                  path: "/miscellaneous/Telemetry",
                },
                OA: {
                  label: "Orchestration and Automation",
                  value: "OA",
                  path: "/miscellaneous/Orchestration-and-Automation",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                //______
                // -- Cisco DNA
                CISCO_DNA_2: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA_2",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN_2: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN_2",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI_2: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI_2",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS_2: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS_2",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS_2: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS_2",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL_2: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL_2",
                  path: "/Aruba-Central",
                },
                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC_2",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                //______
              },
            },
          },
        },
      },

      /**
       * Security and cyber Security
       */
      SECURITY_AND_CYBER_SECURITY: {
        label: "SECURITY AND CYBERSECURITY",
        value: "SECURITY_AND_CYBER_SECURITY",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * DATA CENTER AND VIRTUALIZATION
       */
      DATA_CENTER_AND_VIRTUALIZATION: {
        label: "DATA CENTER AND VIRTUALIZATION",
        value: "DATA_CENTER_AND_VIRTUALIZATION",
        menus: {
          image: DATA_CENTER_SECURITY_IMAGE,
          title: "Data Center Security",
          security_red: THEME_COLOR.data_center_security,
          subtitle: `Data Center Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },

            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * COLLABORATION AND PRODUCTIVITY
       */
      CAB: {
        label: "COLLABORATION AND PRODUCTIVITY ",
        value: "CAB",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },

      /**
       * SERVICE PROVIDER
       */
      SP: {
        label: "SERVICE PROVIDER ",
        value: "SP",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
      /**
       * CLOUD AND COMPUTING
       */
      CAC: {
        label: "CLOUD AND COMPUTING ",
        value: "CAC",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
      /**
       * INTERNET OF THINGS
       */
      IOT: {
        label: "INTERNET OF THINGS (IoT) ",
        value: "IOT",
        menus: {
          image: SECURITY_MAIN_IMAGE,
          title: "SECURITY",
          security_red: THEME_COLOR.security_red,
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. Multi-vendor technology and hardware's Satellite, deployment, monitoring and support`,
          menus: {
            // --SECURITY --
            SECURITY: {
              label: "Security",
              value: "SECURITY",
              shaded: false,
              icon: LAN_ICON,
              image: LAN_ICON,
              menus: {
                NETWORK_SECURITY: {
                  label: "Network Security",
                  value: "NETWORK_SECURITY",
                  path: "/security/network-security",
                },
                DATA_CENTER_SECURITY: {
                  label: "Data Center Security",
                  value: "DATA_CENTER_SECURITY",
                  path: "/security/data-center-security",
                },
                CIS: {
                  label: "Cloud Infrastructure Security",
                  value: "CIS",
                  path: "/security/Cloud-Infrastructure-Security",
                },
                WAAS: {
                  label: "Web Application & API Security",
                  value: "WAAS",
                  path: "/security/Web-Application-API-Security",
                },
                EMAIL_SECURITY: {
                  label: "Email Security",
                  value: "EMAIL_SECURITY",
                  path: "/security/Email Security",
                },
                RAVS: {
                  label: "Remote Access VPN Security",
                  value: "RAVS",
                  path: "/security/Remote-Access-VPN-Security",
                },
                IAMM: {
                  label: "Identify and Access Management/MFA",
                  value: "IAMM",
                  path: "/security/Identify-Access-Management",
                },
                DNS_SECURITY: {
                  label: "DNS Security",
                  value: "DNS_SECURITY",
                  path: "/security/DNS-Security",
                },
                SECURITY_ANALYTICS: {
                  label: "Security Analytics",
                  value: "SECURITY_ANALYTICS",
                  path: "/security/Security-Analytics",
                },
              },
            },
            CYBERSECURITY: {
              label: "Cybersecurity",
              value: "CYBERSECURITY",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CSC: {
                  label: "Cybersecurity Consulting",
                  value: "CSC",
                  path: "/cybersecurity/Cybersecurity-Consulting",
                },
                PT: {
                  label: "Penetration Testing",
                  value: "PT",
                  path: "/cybersecurity/Penetration Testing",
                },
                VA: {
                  label: "Vulnerability Assessment",
                  value: "VA",
                  path: "/cybersecurity/Vulnerability-Assessment ",
                },
                RTR: {
                  label: "Ransomeware Threat Response",
                  value: "RTR",
                  path: "/cybersecurity/Ransomeware-Threat-Response ",
                },
                FI: {
                  label: "Forensic Investigation",
                  value: "FI",
                  path: "/cybersecurity/Forensic-Investigation ",
                },
                MDR: {
                  label: "Managed Detection and Response",
                  value: "MDR",
                  path: "/cybersecurity/Managed-Detection-Response ",
                },
              },
            },

            BLANK: {
              label: "",
              value: "",
              shaded: false,
              icon: "",
              image: "",
              menus: {},
            },

            MISCELLANEOUS: {
              label: "Miscellaneous",
              value: "MISCELLANEOUS",
              shaded: false,
              icon: MISC_ICON,
              image: MISC_ICON,
              menus: {
                CMS: {
                  label: "Cloud Managed Security",
                  value: "CMS",
                  path: "/miscellaneous/Cloud-Managed-Security",
                },
                CDS: {
                  label: "Cloud-Delivered Security(SASE))",
                  value: "CDS",
                  path: "/miscellaneous/Cloud-Delivered-Security",
                },
                SAAS_NOA: {
                  label:
                    "Security-as-a-Service for Networks Orchestration and Automation",
                  value: "SAAS_NOA",
                  path: "/miscellaneous/Security-as-a-Service-for-Networks",
                },
              },
            },

            // -- Popular ---
            POPULAR: {
              label: "POPULAR",
              value: "POPULAR",
              shaded: true,
              icon: POPULAR_ICON,
              image: POPULAR_ICON,
              menus: {
                // -- Cisco ASA
                CISCO_ASA: {
                  label: "Cisco ASA",
                  value: "CISCO_ASA",
                  path: "/Cisco-ASA",
                },
                // -- Cisco FTD & FMC
                CISCO_FTD_FMC: {
                  label: "Cisco FTD & FMC",
                  value: "CISCO_FTD_FMC",
                  path: "/Cisco-FTD-FMC",
                },
                // -- Cisco SecureX
                CISCO_SECURE_X: {
                  label: "Cisco SecureX",
                  value: "CISCO_SECURE_X",
                  path: "/Cisco-SecureX",
                },
                // -- Cisco Secure Endpoint
                CSE: {
                  label: "Cisco Secure Endpoint(AMP for Endpoint)",
                  value: "CSE",
                  path: "/Cisco-Secure-Endpoint",
                },
                // -- Cisco Duo
                CISCO_DUO: {
                  label: "Cisco Duo",
                  value: "CISCO_DUO",
                  path: "/Cisco-Duo",
                },
                // -- Cisco Umbrella
                CISCO_UMBRELLA: {
                  label: "Cisco Umbrella",
                  value: "CISCO_UMBRELLA",
                  path: "/Cisco-Umbrella",
                },
                // -- Cisco Velo Cloud
                VWVC: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WAN_2",
                  path: "/Silver-Peak-SD-WAN",
                },
                // --SP_SD_WAN: {
                SP_SD_WAN_2N: {
                  label: "Silver Peak SD-WAN",
                  value: "SP_SD_WA_2N",
                  path: "/Silver-Peak-SD-WAN",
                },

                // -- Cisco DNA
                CISCO_DNA: {
                  label: "Cisco DNA Center",
                  value: "CISCO_DNA",
                  path: "/Cisco-DNA-Center",
                },
                // -- Cisco SD WAN
                CISCO_SD_WAN: {
                  label: "Cisco SD-WAN",
                  value: "CISCO_SD_WAN",
                  path: "/Cisco-SD-WAN",
                },
                // -- Cisco meraki
                CISCO_MERAKI: {
                  label: "Cisco Meraki",
                  value: "CISCO_MERAKI",
                  path: "/Cisco-Meraki",
                },
                // -- Cisco Cisco Unified Wireless
                CUWNS: {
                  label: "Cisco Unified Wireless Network Solution",
                  value: "CUWNS",
                  path: "/Cisco-Unified-Wireless-Network-Solution",
                },
                // -- Cisco  Enterprise NSV Infrastructure
                CENIS: {
                  label: "Cisco Enterprise NSV Infrastructure",
                  value: "CENIS",
                  path: "/Cisco-Enterprise-NSV-Infrastructure",
                },
                // -- Cisco Aruba Centra
                ARUBA_CENTRAL: {
                  label: "Aruba Central",
                  value: "ARUBA_CENTRAL",
                  path: "/Aruba-Central",
                },

                // -- Cisco Velo Cloud
                VWVC_2: {
                  label: "VmWare VeloCloud",
                  value: "VWVC",
                  path: "/vmware-velo-cloud",
                },
              },
            },
          },
        },
      },
    },
  },
  More: {
    label: "More ",
    value: "More",
    isMore: true,
    sideBarMenus: {
      AboutUs: {
        label: "About Us",
        value: "AboutUs",
      },
      WhyChooseUs: {
        label: "Why Choose Us",
        value: "WhyChooseUs",
      },
      Industries: {
        label: "Industries",
        value: "Industries",
      },
      OurPresence: {
        label: "Our Presence",
        value: "OurPresence",
      },
      OurCustomers: {
        label: "Our Customers",
        value: "OurCustomers",
      },
      Blog: {
        label: "Blog",
        value: "Blog",
      },
      Career: {
        label: "Career",
        value: "Career",
      },
      ContactUs: {
        label: "ContactUs",
        value: "Contact Us",
      },
    },
  },
};

export const ABOUT_US = {
  title: "About Us",
  image: "",
  subtitle: `
        We are growing as a leading information and communication service provider and 
        we help organizations in developing next generation infrastructure which keeps them operational without any disruption.
        ${(<br />)}${(<br />)}
        We Design, Deliver & Manage Services that helps our customers in improving their customer experience,
        empower their people, create competitive edge and immediately respond to changing scenario.
        ${(<br />)}${(<br />)}
        We Design, Deliver & Manage Services that helps our customers in improving their customer experience,
        empower their people, create competitive edge and immediately respond to changing scenario.
        `,
};

export const CONTACT_US = {
  title: "Contact Us",
  image: "",
  subtitle: `
  We are growing as a leading information and communication service 
  provider and we help organizations in developing next generation infrastructure which keeps them operational without any disruption.
  ${(<br />)}${(<br />)}
  We Design, Deliver & Manage Services that helps our customers in improving their customer experience,
   empower their people, create competitive edge and immediately respond to changing scenario.
        `,
  Technology: {
    value: "Technology",
    title: "Technology Expense Management & Lifecycle Solutions",
    list: [
      "Here is some random data to print",
      "Here is some random data to print",
      "Here is some random data to print",
      "Here is some random data to print",
      "Here is some random data to print",
      "Here is some random data to print",
    ],
  },
};
