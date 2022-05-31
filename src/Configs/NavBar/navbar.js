// IT Infrastructure > NETWORK WIRED AND WIRELESS,  SECURITY AND CYBERSECURITY

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
          image: "",
          title: "NETWORK",
          subtitle: `Implement enterprise-class connectivity for wired and wireless. 
            Multi-vendor technology and hardware's Satellite, deployment, 
            monitoring and support`,
          menus: {
            non_shaded: {
              menus: {
                // --LAN --
                LAN: {
                  label: "LAN",
                  value: "LAN",
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

                //--Wireless and mobility --
                MISCELLANEOUS: {
                  label: "Miscellaneous",
                  value: "MISCELLANEOUS",
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
              },
            },
            // -- shaded ---
            shaded: {
              menus: {
                label: "POPULAR",
                value: "POPULAR",
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
      },

      /**
       * Security and cyber Security
       */
      SECURITY_AND_CYBER_SECURITY: {
        label: "SECURITY AND CYBERSECURITY",
        value: "SECURITY_AND_CYBER_SECURITY",
        menus: {
          image: "",
          title: "SECURITY",
          subtitle: `Security-Implement enterprise-class connectivity for wired and wireless. 
            Multi-vendor technology and hardware's Satellite, deployment, 
            monitoring and support`,
          menus: {
            non_shaded: {
              menus: {
                // --SECURITY --
                SECURITY: {
                  label: "Security",
                  value: "SECURITY",
                  menus: {
                    NETWORK_SECURITY: {
                      label: "Network Security",
                      value: "NETWORK_SECURITY",
                      path: "/security/Network_Security",
                    },
                    DATA_CENTER_SECURITY: {
                      label: "Data Center Security",
                      value: "DATA_CENTER_SECURITY",
                      path: "/security/Data-Center-Security",
                    },
                    CIF: {
                      label: "Cloud Infrastructure Security ",
                      value: "CIF",
                      path: "/security/Cloud-Infrastructure-Security",
                    },
                    ENDPOINT_SECURITY: {
                      label: "Endpoint Security",
                      value: "ENDPOINT_SECURITY",
                      path: "/security/Endpoint-Security",
                    },
                    EMAIL_SECURITY: {
                      label: "Email Security",
                      value: "EMAIL_SECURITY",
                      path: "/security/Email-Security",
                    },
                    WA_AP: {
                      label: "Web Application & API Security",
                      value: "WA_AP",
                      path: "/security/Web-Application-API-Security",
                    },
                    RAVS: {
                      label: "Remote Access VPN Security ",
                      value: "RAVS",
                      path: "/security/Remote-Access-VPN-Security",
                    },
                    IAM_MFA: {
                      label: "Identity and Access Management/MFA",
                      value: "IAM_MFA",
                      path: "/security/Identity-Access-Management",
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
                // --cyber security--
                CYBERSECURITY: {
                  label: "Cybersecurity",
                  value: "CYBERSECURITY",
                  menus: {
                    CYBERSECURITY_CONS: {
                      label: "Cybersecurity Consulting",
                      value: "CYBERSECURITY_CONS",
                      path: "/cybersecurity/consulting",
                    },
                    PT: {
                      label: "Penetration Testing",
                      value: "PT",
                      path: "/cybersecurity/Penetration-Testing",
                    },
                    VA: {
                      label: "Vulnerability Assessment",
                      value: "VA",
                      path: "/cybersecurity/Vulnerability-Assessment",
                    },
                    RTR: {
                      label: "Ransomeware Threat Response",
                      value: "RTR",
                      path: "/cybersecurity/Ransomeware-Threat-Response",
                    },
                    FI: {
                      label: "Forensic Investigation",
                      value: "FI",
                      path: "/cybersecurity/Forensic-Investigation",
                    },
                    MDR: {
                      label: "Ransomeware Threat Response",
                      value: "MDR",
                      path: "/cybersecurity/Ransomeware-Threat-Response",
                    },
                  },
                },

                //--Wireless and mobility --
                MISCELLANEOUS: {
                  label: "Miscellaneous",
                  value: "MISCELLANEOUS",
                  menus: {
                    CMS: {
                      label: "Cloud Managed Security",
                      value: "CMS",
                      path: "/miscellaneous/Cloud-Managed-Security",
                    },
                    SASE: {
                      label: "Cloud-Delivered Security(SASE)",
                      value: "SASE",
                      path: "/miscellaneous/Cloud-Delivered-Security",
                    },
                    SAAS_FOR_NETWORK: {
                      label: "Security-as-a-Service for Networks",
                      value: "SAAS_FOR_NETWORK",
                      path: "/miscellaneous/Security-as-a-Service-for-Networks",
                    },
                    OA: {
                      label: "Orchestration and Automation",
                      value: "OA",
                      path: "/miscellaneous/Orchestration-and-Automation",
                    },
                  },
                },
              },
            },
            // -- shaded ---
            shaded: {
              menus: {
                label: "POPULAR",
                value: "POPULAR",
                menus: {
                  // -- Cisco ASA
                  CISCO_ASA: {
                    label: "Cisco ASA",
                    value: "CISCO_ASA",
                    path: "/Cisco-ASA",
                  },
                  // -- Cisco FTD FMC
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
                    label: "Cisco Secure Endpoint (AMP for Endpoint)",
                    value: "CSE",
                    path: "/Cisco-Secure-Endpoint",
                  },
                  // -- Cisco  Duo
                  CISCO_DUO: {
                    label: "Cisco Duo",
                    value: "CISCO_DUO",
                    path: "/Cisco-duo",
                  },
                  // -- Cisco  Duo
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
      },

      /**
       * DATA CENTER AND VIRTUALIZATION
       */
      DATA_CENTER_AND_VIRTUALIZATION: {
        label: "DATA CENTER AND VIRTUALIZATION",
        value: "DATA_CENTER_AND_VIRTUALIZATION",
      },

      /**
       * COLLABORATION AND PRODUCTIVITY
       */
      CAB: {
        label: "COLLABORATION AND PRODUCTIVITY ",
        value: "CAB",
      },
      /**
       * SERVICE PROVIDER
       */
      SP: {
        label: "SERVICE PROVIDER ",
        value: "SP",
      },
      /**
       * CLOUD AND COMPUTING
       */
      CAC: {
        label: "CLOUD AND COMPUTING ",
        value: "CAC",
      },
      /**
       * INTERNET OF THINGS
       */
      IOT: {
        label: "INTERNET OF THINGS (IoT) ",
        value: "IOT",
      },
    },
  },
  DND: { label: "DevOps & Deployment ", value: "DND", isMore: false },
  SERVICES: { label: "Services", value: "SERVICES", isMore: false },
  More: { label: "More ", value: "More", isMore: true },
};
