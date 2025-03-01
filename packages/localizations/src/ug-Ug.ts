import type { LocalizationResource } from '@clerk/types';

export const ugUg: LocalizationResource = {
  locale: 'ug-Ug',
  backButton: 'قايتىش',
  badge__default: 'كۆڭۈلدىكى',
  badge__otherImpersonatorDevice: 'باشقا ماسكۇرلاشقۇچى قۇرال',
  badge__primary: 'ئاساسىي',
  badge__requiresAction: 'ھەرىكەت تەلەپ قىلىنىدۇ',
  badge__thisDevice: 'بۇ قۇرال',
  badge__unverified: 'دەلىللەنمىگەن',
  badge__userDevice: 'ئىشلەتكۈچى قۇرالى',
  badge__you: 'سىز',
  createOrganization: {
    formButtonSubmit: 'تەشكىلات قۇرۇش',
    invitePage: {
      formButtonReset: 'ئۆتۈپ كەت',
    },
    title: 'تەشكىلات قۇرۇش',
  },
  dates: {
    lastDay: "تۆنۈگۈن {{ date | timeString('ug-CN') }}",
    next6Days: "{{ date | weekday('ug-CN','long') }} {{ date | timeString('ug-CN') }}",
    nextDay: "ئەتە {{ date | timeString('ug-CN') }}",
    numeric: "{{ date | numeric('ug-CN') }}",
    previous6Days: "ئۆتكەن ھەپتە {{ date | weekday('ug-CN','long') }} {{ date | timeString('ug-CN') }}",
    sameDay: "بۈگۈن {{ date | timeString('ug-CN') }}",
  },
  dividerText: 'ياكى',
  footerActionLink__useAnotherMethod: 'باشقا ئۇسۇلنى ئىشلەت',
  footerPageLink__help: 'ياردەم',
  footerPageLink__privacy: 'مەخپىيەتلىك',
  footerPageLink__terms: 'شەرتلەر',
  formButtonPrimary: 'دەۋام',
  formButtonPrimary__verify: 'دەلىللەش',
  formFieldAction__forgotPassword: 'پارولنى ئۇنتۇڭىز؟',
  formFieldError__matchingPasswords: 'پارول ماس كېلىدۇ.',
  formFieldError__notMatchingPasswords: 'پارول ماس كەلمەيدۇ.',
  formFieldError__verificationLinkExpired: 'دەلىللەش ئۇلانمىسى ۋاقتى ئۆتۈپ كەتتى. يېڭى ئۇلانما تەلەپ قىلىڭ.',
  formFieldHintText__optional: 'تاللاشقا بولىدۇ',
  formFieldHintText__slug:
    'Slug بولسا ئىنسانلار تونۇيدىغان ID بولۇپ، ئۇ بىرلا بولۇشى كېرەك. ئادەتتە URL دىلا ئىشلىتىلىدۇ.',
  formFieldInputPlaceholder__backupCode: undefined,
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'ھېساباتنى ئۆچۈرۈش',
  formFieldInputPlaceholder__emailAddress: undefined,
  formFieldInputPlaceholder__emailAddress_username: undefined,
  formFieldInputPlaceholder__emailAddresses:
    'بىر ياكى بىر قانچە ئېلېكترونلۇق خەت ئادرېسىنى كىرگۈزۈڭ ياكى چاپلاڭ، بوشلۇق ياكى پەش بىلەن ئايرىڭ',
  formFieldInputPlaceholder__firstName: undefined,
  formFieldInputPlaceholder__lastName: undefined,
  formFieldInputPlaceholder__organizationDomain: undefined,
  formFieldInputPlaceholder__organizationDomainEmailAddress: undefined,
  formFieldInputPlaceholder__organizationName: undefined,
  formFieldInputPlaceholder__organizationSlug: 'مېنىڭ تەشكىلاتىم',
  formFieldInputPlaceholder__password: undefined,
  formFieldInputPlaceholder__phoneNumber: undefined,
  formFieldInputPlaceholder__username: undefined,
  formFieldLabel__automaticInvitations: 'بۇ دائىرە ئۈچۈن ئاپتوماتىك تەكلىپنى قوزغات',
  formFieldLabel__backupCode: 'زاپچاس كود',
  formFieldLabel__confirmDeletion: 'جەزملەش',
  formFieldLabel__confirmPassword: 'پارولنى جەزملەش',
  formFieldLabel__currentPassword: 'نۆۋەتتىكى پارول',
  formFieldLabel__emailAddress: 'ئېلېكترونلۇق خەت ئادرېسى',
  formFieldLabel__emailAddress_username: 'ئېلېكترونلۇق خەت ئادرېسى ياكى ئىشلەتكۈچى ئىسمى',
  formFieldLabel__emailAddresses: 'ئېلېكترونلۇق خەت ئادرېسى',
  formFieldLabel__firstName: 'ئىسمى',
  formFieldLabel__lastName: 'فامىلىسى',
  formFieldLabel__newPassword: 'يېڭى پارول',
  formFieldLabel__organizationDomain: 'دائىرە',
  formFieldLabel__organizationDomainDeletePending: 'كۈتۈۋاتقان تەكلىپ ۋە تەۋسىيەلەرنى ئۆچۈرۈش',
  formFieldLabel__organizationDomainEmailAddress: 'ئېلېكترونلۇق خەت ئادرېسىنى دەلىللەش',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'بۇ دائىرە ئاستىدىكى ئېلېكترونلۇق خەت ئادرېسىنى كىرگۈزۈڭ، دەلىللەش كودىنى تاپشۇرۇۋېلىش ۋە بۇ دائىرەنى دەلىللەش ئۈچۈن.',
  formFieldLabel__organizationName: 'تەشكىلات ئىسمى',
  formFieldLabel__organizationSlug: 'URL قىسقارتىلمىسى',
  formFieldLabel__passkeyName: undefined,
  formFieldLabel__password: 'پارول',
  formFieldLabel__phoneNumber: 'تېلېفون نومۇرى',
  formFieldLabel__role: 'رول',
  formFieldLabel__signOutOfOtherSessions: 'باشقا قۇراللاردىن چېكىنىش',
  formFieldLabel__username: 'ئىشلەتكۈچى ئىسمى',
  impersonationFab: {
    action__signOut: 'چېكىنىش',
    title: '{{identifier}} دەپ كىرگەن',
  },
  maintenanceMode: undefined,
  membershipRole__admin: 'ئىدارەچى',
  membershipRole__basicMember: 'ئەزالىق',
  membershipRole__guestMember: 'مېھمان',
  organizationList: {
    action__createOrganization: 'تەشكىلات قۇرۇش',
    action__invitationAccept: 'قوشۇلۇش',
    action__suggestionsAccept: 'قوشۇلۇش تەلەپ قىلىش',
    createOrganization: 'تەشكىلات قۇرۇش',
    invitationAcceptedLabel: 'قوشۇلدى',
    subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
    suggestionsAcceptedLabel: 'تەستىقلاشنى ساقلاڭ',
    title: 'ھېسابات تاللاڭ',
    titleWithoutPersonal: 'تەشكىلات تاللاڭ',
  },
  organizationProfile: {
    badge__automaticInvitation: 'ئاپتوماتىك تەكلىپ',
    badge__automaticSuggestion: 'ئاپتوماتىك تەۋسىيە',
    badge__manualInvitation: 'ئاپتوماتىك تىزىملاتقۇ يوق',
    badge__unverified: 'دەلىللەنمىگەن',
    createDomainPage: {
      subtitle:
        'دەلىللەش ئۈچۈن دائىرە قوشۇڭ. بۇ دائىرە ئېلېكترونلۇق خەت ئادرېسى بار ئىشلەتكۈچىلەر ئاپتوماتىك ھالدا تەشكىلاتقا قوشۇلالايدۇ ياكى قوشۇلۇش تەلەپ قىلالايدۇ.',
      title: 'دائىرە قوشۇش',
    },
    invitePage: {
      detailsTitle__inviteFailed: 'تەكلىپ ئەۋەتىلمىدى. تۆۋەندىكى مەسىلىلەرنى تۈزەتسىڭىز، قايتا سىناڭ.',
      formButtonPrimary__continue: 'تەكلىپ ئەۋەتىش',
      selectDropdown__role: 'رول تاللاڭ',
      subtitle: 'يېڭى ئەزالىارنى بۇ تەشكىلاتقا تەكلىپ قىلىش',
      successMessage: 'تەكلىپ مۇۋەپپەقىيەتلىك ئەۋەتىلدى',
      title: 'ئەزالىارنى تەكلىپ قىلىش',
    },
    membersPage: {
      action__invite: 'تەكلىپ قىلىش',
      action__search: undefined,
      activeMembersTab: {
        menuAction__remove: 'ئەزالىارنى چىقىرىش',
        tableHeader__actions: undefined,
        tableHeader__joined: 'قوشۇلدى',
        tableHeader__role: 'رول',
        tableHeader__user: 'ئىشلەتكۈچى',
      },
      detailsTitle__emptyRow: 'كۆرسىتىش ئۈچۈن ئەزا يوق',
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            'ئېلېكترونلۇق خەت دائىرىسىنى تەشكىلاتىڭىز بىلەن باغلاپ، ئىشلەتكۈچىلەرنى تەكلىپ قىلىڭ. ماس كېلىدىغان ئېلېكترونلۇق خەت دائىرىسى بىلەن تىزىملاتقان ھەرقانداق ئادەم ھەر ۋاقىت تەشكىلاتقا قوشۇلالايدۇ.',
          headerTitle: 'ئاپتوماتىك تەكلىپ',
          primaryButton: 'دەلىللەنگەن دائىرىلەرنى باشقۇرۇش',
        },
        table__emptyRow: 'كۆرسىتىش ئۈچۈن تەكلىپ يوق',
      },
      invitedMembersTab: {
        menuAction__revoke: 'تەكلىپنى بىكار قىلىش',
        tableHeader__invited: 'تەكلىپ قىلىندى',
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            'ماس كېلىدىغان ئېلېكترونلۇق خەت دائىرىسى بىلەن تىزىملاتقان ئىشلەتكۈچىلەر تەشكىلاتىڭىزگە قوشۇلۇش تەۋسىيەسىنى كۆرەلەيدۇ.',
          headerTitle: 'ئاپتوماتىك تەۋسىيە',
          primaryButton: 'دەلىللەنگەن دائىرىلەرنى باشقۇرۇش',
        },
        menuAction__approve: 'ماقۇللاش',
        menuAction__reject: 'رەت قىلىش',
        tableHeader__requested: 'زىيارەت تەلەپ قىلىندى',
        table__emptyRow: 'كۆرسىتىش ئۈچۈن تەلەپ يوق',
      },
      start: {
        headerTitle__invitations: 'تەكلىپ',
        headerTitle__members: 'ئەزالىار',
        headerTitle__requests: 'تەلەپ',
      },
    },
    navbar: {
      description: 'تەشكىلاتىڭىزنى باشقۇرۇش.',
      general: 'ئادەتتىكى',
      members: 'ئەزالىار',
      title: 'تەشكىلات',
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription: 'تۆۋەندە "{{organizationName}}" نى كىرگۈزۈڭ.',
          messageLine1: 'بۇ تەشكىلاتنى ئۆچۈرەمسىز؟',
          messageLine2: 'بۇ ھەرىكەت داۋاملىق ۋە قايتۇرۇلمايدۇ.',
          successMessage: 'تەشكىلاتنى ئۆچۈردىڭىز.',
          title: 'تەشكىلاتنى ئۆچۈرۈش',
        },
        leaveOrganization: {
          actionDescription: 'تۆۋەندە "{{organizationName}}" نى كىرگۈزۈڭ.',
          messageLine1:
            'بۇ تەشكىلاتتىن چىقىمسىز؟ بۇ تەشكىلات ۋە ئۇنىڭ پروگراممىلىرىغا زىيارەت قىلىش ھوقۇقىڭىزنى يوقىتىسىز.',
          messageLine2: 'بۇ ھەرىكەت داۋاملىق ۋە قايتۇرۇلمايدۇ.',
          successMessage: 'تەشكىلاتتىن چىقتىڭىز.',
          title: 'تەشكىلاتتىن چىقىش',
        },
        title: 'خەتەر',
      },
      domainSection: {
        menuAction__manage: 'باشقۇرۇش',
        menuAction__remove: 'ئۆچۈرۈش',
        menuAction__verify: 'دەلىللەش',
        primaryButton: 'دائىرە قوشۇش',
        subtitle:
          'ئىشلەتكۈچىلەرنى دەلىللەنگەن ئېلېكترونلۇق خەت دائىرىسى بويىچە ئاپتوماتىك ھالدا تەشكىلاتقا قوشۇلۇش ياكى قوشۇلۇش تەلەپ قىلىشقا رۇخسەت قىلىش.',
        title: 'دەلىللەنگەن دائىرىلەر',
      },
      successMessage: 'تەشكىلات ئۇچۇرى يېڭىلاندى.',
      title: 'تەشكىلات ئۇچۇرى',
    },
    removeDomainPage: {
      messageLine1: 'ئېلېكترونلۇق خەت دائىرىسى {{domain}} ئۆچۈرۈلىدۇ.',
      messageLine2: 'بۇنىڭدىن كېيىن، ئىشلەتكۈچىلەر ئاپتوماتىك ھالدا تەشكىلاتقا قوشۇلالمايدۇ.',
      successMessage: '{{domain}} ئۆچۈرۈلدى.',
      title: 'دائىرە ئۆچۈرۈش',
    },
    start: {
      headerTitle__general: 'ئادەتتىكى',
      headerTitle__members: 'ئەزالىار',
      profileSection: {
        primaryButton: 'تەشكىلات ئۇچۇرىنى يېڭىلاش',
        title: 'تەشكىلات ئۇچۇرى',
        uploadAction__title: 'لۆگىسى',
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: 'بۇ دائىرەنى ئۆچۈرۈش تەكلىپ قىلىنغان ئىشلەتكۈچىلەرگە تەسىر كۆرسىتىدۇ.',
        removeDomainActionLabel__remove: 'دائىرە ئۆچۈرۈش',
        removeDomainSubtitle: 'دەلىللەنگەن دائىرىڭىزدىن بۇ دائىرەنى ئۆچۈرۈش',
        removeDomainTitle: 'دائىرە ئۆچۈرۈش',
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          'ئىشلەتكۈچىلەر تىزىملاتقاندا ئاپتوماتىك ھالدا تەشكىلاتقا تەكلىپ قىلىنىدۇ ۋە ھەر ۋاقىت قوشۇلالايدۇ.',
        automaticInvitationOption__label: 'ئاپتوماتىك تەكلىپ',
        automaticSuggestionOption__description:
          'ئىشلەتكۈچىلەر قوشۇلۇش تەۋسىيەسىنى تاپشۇرىدۇ، لېكىن تەشكىلاتقا قوشۇلۇشتىن بۇرۇن ئىدارەچىنىڭ ماقۇللاشىنى تەلەپ قىلىدۇ.',
        automaticSuggestionOption__label: 'ئاپتوماتىك تەۋسىيە',
        calloutInfoLabel: 'تىزىملاتقۇ ھالىتىنى ئۆزگەرتىش يېڭى ئىشلەتكۈچىلەرگەلا تەسىر كۆرسىتىدۇ.',
        calloutInvitationCountLabel: 'ئىشلەتكۈچىلەرگە ئەۋەتىلگەن كۈتۈۋاتقان تەكلىپ: {{count}}',
        calloutSuggestionCountLabel: 'ئىشلەتكۈچىلەرگە ئەۋەتىلگەن كۈتۈۋاتقان تەۋسىيە: {{count}}',
        manualInvitationOption__description: 'ئىشلەتكۈچىلەرنى قولىمۇ-قول تەكلىپ قىلىش كېرەك.',
        manualInvitationOption__label: 'ئاپتوماتىك تىزىملاتقۇ يوق',
        subtitle: 'بۇ دائىرە ئىشلەتكۈچىلىرىنىڭ تەشكىلاتقا قانداق قوشۇلىدىغانلىقىنى تاللاڭ.',
      },
      start: {
        headerTitle__danger: 'خەتەر',
        headerTitle__enrollment: 'تىزىملاتقۇ تاللانمىسى',
      },
      subtitle: 'دائىرە {{domain}} دەلىللەندى. تىزىملاتقۇ ھالىتىنى تاللاڭ.',
      title: '{{domain}} نى يېڭىلاش',
    },
    verifyDomainPage: {
      formSubtitle: 'ئېلېكترونلۇق خەت ئادرېسىڭىزگە ئەۋەتىلگەن دەلىللەش كودىنى كىرگۈزۈڭ',
      formTitle: 'دەلىللەش كودى',
      resendButton: 'دەلىللەش كودىنى تاپشۇرالمىدىڭىزمۇ؟ قايتا ئەۋەتىش',
      subtitle: 'دائىرە {{domainName}} ئېلېكترونلۇق خەت ئارقىلىق دەلىللەش تەلەپ قىلىنىدۇ.',
      subtitleVerificationCodeScreen:
        'دەلىللەش كودى {{emailAddress}} غا ئەۋەتىلدى. دەلىللەش كودىنى كىرگۈزۈپ داۋاملاشتۇرۇڭ.',
      title: 'دائىرە دەلىللەش',
    },
  },
  organizationSwitcher: {
    action__createOrganization: 'تەشكىلات قۇرۇش',
    action__invitationAccept: 'قوشۇلۇش',
    action__manageOrganization: 'تەشكىلاتنى باشقۇرۇش',
    action__suggestionsAccept: 'قوشۇلۇش تەلەپ قىلىش',
    notSelected: 'تەشكىلات تالlanمىدى',
    personalWorkspace: 'شەخسىي خىزمەت دائىرىسى',
    suggestionsAcceptedLabel: 'ماقۇللاشنى ساقلاڭ',
  },
  paginationButton__next: 'كېيىنكى بەت',
  paginationButton__previous: 'ئالدىنقى بەت',
  paginationRowText__displaying: 'كۆرسىتىۋاتىدۇ',
  paginationRowText__of: 'نىڭ',
  reverification: {
    alternativeMethods: {
      actionLink: undefined,
      actionText: undefined,
      blockButton__backupCode: undefined,
      blockButton__emailCode: undefined,
      blockButton__password: undefined,
      blockButton__phoneCode: undefined,
      blockButton__totp: undefined,
      getHelp: {
        blockButton__emailSupport: undefined,
        content: undefined,
        title: undefined,
      },
      subtitle: undefined,
      title: undefined,
    },
    backupCodeMfa: {
      subtitle: undefined,
      title: undefined,
    },
    emailCode: {
      formTitle: undefined,
      resendButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    noAvailableMethods: {
      message: undefined,
      subtitle: undefined,
      title: undefined,
    },
    password: {
      actionLink: undefined,
      subtitle: undefined,
      title: undefined,
    },
    phoneCode: {
      formTitle: undefined,
      resendButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    phoneCodeMfa: {
      formTitle: undefined,
      resendButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    totpMfa: {
      formTitle: undefined,
      subtitle: undefined,
      title: undefined,
    },
  },
  signIn: {
    accountSwitcher: {
      action__addAccount: 'ھېسابات قوشۇش',
      action__signOutAll: 'ھەممە ھېساباتتىن چېكىنىش',
      subtitle: 'داۋاملاشتۇرۇش ئۈچۈن ھېسابات تاللاڭ.',
      title: 'ھېسابات تاللاڭ',
    },
    alternativeMethods: {
      actionLink: 'ياردەم تېپىش',
      actionText: 'بۇلار يوق؟',
      blockButton__backupCode: 'زاپچاس كودنى ئىشلەت',
      blockButton__emailCode: 'ئېلېكترونلۇق خەتكە دەلىللەش كودى {{identifier}}',
      blockButton__emailLink: 'ئېلېكترونلۇق خەتكە ئۇلانما {{identifier}}',
      blockButton__passkey: undefined,
      blockButton__password: 'پارولىڭىز بىلەن كىرىڭ',
      blockButton__phoneCode: 'قىسقا ئۇچۇر كودى {{identifier}} غا ئەۋەتىش',
      blockButton__totp: 'دەلىللەش پروگراممىسىنى ئىشلەت',
      getHelp: {
        blockButton__emailSupport: 'ئېلېكترونلۇق خەت قوللىغۇچىسى',
        content:
          'ھېساباتقا كىرىشتە مەسىلىلىك بولسىڭىز، بىزگە ئېلېكترونلۇق خەت ئەۋەتىڭ، بىز سىزنىڭ زىيارەت ھوقۇقىڭىزنى تېزلا قايتۇرىمىز.',
        title: 'ياردەم تېپىش',
      },
      subtitle: 'مەسىلىلىك بولسىڭىز، تۆۋەندىكى ھەرقانداق ئۇسۇلنى ئىشلىتىپ كىرەلەيسىز.',
      title: 'باشقا ئۇسۇلنى ئىشلەت',
    },
    backupCodeMfa: {
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      title: 'زاپچاس كودنى كىرگۈزۈڭ',
    },
    emailCode: {
      formTitle: 'دەلىللەش كودى',
      resendButton: 'دەلىللەش كودىنى قايتا ئەۋەتىش',
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      title: 'ئېلېكترونلۇق خەتىڭىزنى تەكشۈرۈڭ',
    },
    emailLink: {
      clientMismatch: {
        subtitle: undefined,
        title: undefined,
      },
      expired: {
        subtitle: 'ئەسلى بەتكە قايتىڭ.',
        title: 'بۇ دەلىللەش ئۇلانمىسى ۋاقتى ئۆتۈپ كەتتى',
      },
      failed: {
        subtitle: 'ئەسلى بەتكە قايتىڭ.',
        title: 'بۇ دەلىللەش ئۇلانمىسى ئىناۋەتسىز',
      },
      formSubtitle: 'ئېلېكترونلۇق خەتىڭىزگە ئەۋەتىلگەن دەلىللەش ئۇلانمىسىنى ئىشلەت',
      formTitle: 'دەلىللەش ئۇلانمىسى',
      loading: {
        subtitle: 'سىزنى قايتا يۆتكەيدۇ',
        title: 'كىرىۋاتىدۇ...',
      },
      resendButton: 'ئۇلانمىنى قايتا ئەۋەتىش',
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      title: 'ئېلېكترونلۇق خەتىڭىزنى تەكشۈرۈڭ',
      unusedTab: {
        title: 'بۇ بەتنى يېپىپ قويسىڭىز بولىدۇ',
      },
      verified: {
        subtitle: 'سىزنى قايتا يۆتكەيدۇ',
        title: 'مۇۋەپپەقىيەتلىك كىردىڭىز',
      },
      verifiedSwitchTab: {
        subtitle: 'ئەسلى بەتكە قايتىڭ',
        subtitleNewTab: 'يېڭى ئېچىلغان بەتكە قايتىڭ',
        titleNewTab: 'باشقا بەتتە كىردىڭىز',
      },
    },
    forgotPassword: {
      formTitle: 'پارولنى قايتا تەڭشەش كودى',
      resendButton: 'كودنى قايتا ئەۋەتىش',
      subtitle: 'پارولىڭىزنى قايتا تەڭشەش',
      subtitle_email: 'ئاۋۋال، ئېلېكترونلۇق خەت ID غا ئەۋەتىلگەن كودنى كىرگۈزۈڭ',
      subtitle_phone: 'ئاۋۋال، تېلېفونىڭىزغا ئەۋەتىلگەن كودنى كىرگۈزۈڭ',
      title: 'پارولنى قايتا تەڭشەش',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: 'پارولنى قايتا تەڭشەش',
      label__alternativeMethods: 'ياكى، باشقا ئۇسۇلنى ئىشلىتىپ كىرىڭ.',
      title: 'پارولنى ئۇنتۇڭىز؟',
    },
    noAvailableMethods: {
      message: 'كىرىشكە داۋاملاشقىلى بولمايدۇ. دەلىللەش ئامىلى يوق.',
      subtitle: 'خاتالىق كۆرۈلدى',
      title: 'كىرەلمەيسىز',
    },
    passkey: {
      subtitle: undefined,
      title: undefined,
    },
    password: {
      actionLink: 'باشقا ئۇسۇلنى ئىشلەت',
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      title: 'پارولىڭىزنى كىرگۈزۈڭ',
    },
    passwordPwned: {
      title: undefined,
    },
    phoneCode: {
      formTitle: 'دەلىللەش كودى',
      resendButton: 'دەلىللەش كودىنى قايتا ئەۋەتىش',
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      title: 'تېلېفونىڭىزنى تەكشۈرۈڭ',
    },
    phoneCodeMfa: {
      formTitle: 'دەلىللەش كودى',
      resendButton: 'دەلىللەش كودىنى قايتا ئەۋەتىش',
      subtitle: 'تېلېفونىڭىزغا ئەۋەتىلگەن دەلىللەش كودىنى كىرگۈزۈڭ.',
      title: 'تېلېفونىڭىزنى تەكشۈرۈڭ',
    },
    resetPassword: {
      formButtonPrimary: 'پارولنى قايتا تەڭشەش',
      requiredMessage: 'بىخەتەرلىك سەۋەبىدىن، پارولىڭىزنى قايتا تەڭشەش تەلەپ قىلىنىدۇ.',
      successMessage: 'پارولىڭىز مۇۋەپپەقىيەتلىك ئۆزگەرتىلدى. سىزنى كىرگۈزۈشكە تەييارلىق قىلىۋاتىدۇ، سەل تۇرۇڭ.',
      title: 'پارولنى قايتا تەڭشەش',
    },
    resetPasswordMfa: {
      detailsLabel: 'پارولىڭىزنى قايتا تەڭشەش ئۈچۈن كىملىكىڭىزنى دەلىللەش تەلەپ قىلىنىدۇ.',
    },
    start: {
      actionLink: 'تىزىملاتقۇ',
      actionLink__join_waitlist: undefined,
      actionLink__use_email: 'ئېلېكترونلۇق خەت ئىشلەت',
      actionLink__use_email_username: 'ئېلېكترونلۇق خەت ياكى ئىشلەتكۈچى ئىسمى ئىشلەت',
      actionLink__use_passkey: undefined,
      actionLink__use_phone: 'تېلېفون ئىشلەت',
      actionLink__use_username: 'ئىشلەتكۈچى ئىسمى ئىشلەت',
      actionText: 'ھېساباتىڭىز يوق؟',
      actionText__join_waitlist: undefined,
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      subtitleCombined: undefined,
      title: 'كىرىش',
      titleCombined: undefined,
    },
    totpMfa: {
      formTitle: 'دەلىللەش كودى',
      subtitle: 'دەلىللەش پروگراممىڭىز تەرىپىدىن ھاسىل قىلىنغان دەلىللەش كودىنى كىرگۈزۈڭ.',
      title: 'ئىككى قەدەملىك دەلىللەش',
    },
  },
  signInEnterPasswordTitle: 'پارولىڭىزنى كىرگۈزۈڭ',
  signUp: {
    continue: {
      actionLink: 'كىرىش',
      actionText: 'ھېساباتىڭىز بارمۇ؟',
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      title: 'تولۇق بولمىغان جەريانلارنى تولدۇرۇش',
    },
    emailCode: {
      formSubtitle: 'ئېلېكترونلۇق خەت ئادرېسىڭىزگە ئەۋەتىلگەن دەلىللەش كودىنى كىرگۈزۈڭ',
      formTitle: 'دەلىللەش كودى',
      resendButton: 'دەلىللەش كودىنى قايتا ئەۋەتىش',
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      title: 'ئېلېكترونلۇق خەتىڭىزنى دەلىللەش',
    },
    emailLink: {
      clientMismatch: {
        subtitle: undefined,
        title: undefined,
      },
      formSubtitle: 'ئېلېكترونلۇق خەت ئادرېسىڭىزگە ئەۋەتىلگەن دەلىللەش ئۇلانمىسىنى ئىشلەت',
      formTitle: 'دەلىللەش ئۇلانمىسى',
      loading: {
        title: 'تىزىملاتقۇدا...',
      },
      resendButton: 'ئۇلانمىنى قايتا ئەۋەتىش',
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      title: 'ئېلېكترونلۇق خەتىڭىزنى دەلىللەش',
      verified: {
        title: 'مۇۋەپپەقىيەتلىك تىزىملاتقۇ',
      },
      verifiedSwitchTab: {
        subtitle: 'يېڭى ئېچىلغان بەتكە قايتىڭ',
        subtitleNewTab: 'ئالدىنقى بەتكە قايتىڭ',
        title: 'ئېلېكترونلۇق خەت مۇۋەپپەقىيەتلىك دەلىللەندى',
      },
    },
    legalConsent: {
      checkbox: {
        label__onlyPrivacyPolicy: undefined,
        label__onlyTermsOfService: undefined,
        label__termsOfServiceAndPrivacyPolicy: undefined,
      },
      continue: {
        subtitle: undefined,
        title: undefined,
      },
    },
    phoneCode: {
      formSubtitle: 'تېلېفونىڭىزغا ئەۋەتىلگەن دەلىللەش كودىنى كىرگۈزۈڭ',
      formTitle: 'دەلىللەش كودى',
      resendButton: 'دەلىللەش كودىنى قايتا ئەۋەتىش',
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      title: 'تېلېفونىڭىزنى دەلىللەش',
    },
    restrictedAccess: {
      actionLink: undefined,
      actionText: undefined,
      blockButton__emailSupport: undefined,
      blockButton__joinWaitlist: undefined,
      subtitle: undefined,
      subtitleWaitlist: undefined,
      title: undefined,
    },
    start: {
      actionLink: 'كىرىش',
      actionLink__use_email: undefined,
      actionLink__use_phone: undefined,
      actionText: 'ھېساباتىڭىز بارمۇ؟',
      subtitle: '{{applicationName}} نى داۋاملاشتۇرۇش',
      subtitleCombined: '{{applicationName}} نى داۋاملاشتۇرۇش',
      title: 'ھېساباتىڭىزنى قۇرۇش',
      titleCombined: 'ھېساباتىڭىزنى قۇرۇش',
    },
  },
  socialButtonsBlockButton: '{{provider|titleize}} بىلەن كىرىش',
  socialButtonsBlockButtonManyInView: undefined,
  unstable__errors: {
    already_a_member_in_organization: undefined,
    captcha_invalid:
      'بىخەتەرلىك دەلىللەش مەغلۇپ بولدى، تىزىملاتقۇ مۇۋەپپەقىيەتسىز بولدى. بەتنى يېڭىلاڭ ياكى قوللاش بىلەن ئالاقىلىشىڭ.',
    captcha_unavailable:
      'تىزىملاتقۇ مەغلۇپ بولدى، سەۋەبى روبوت دەلىللەش ئۆتەلمىدى. بەتنى يېڭىلاڭ ياكى قوللاش گۇرۇھى بىلەن ئالاقىلىشىڭ.',
    form_code_incorrect: undefined,
    form_identifier_exists__email_address: undefined,
    form_identifier_exists__phone_number: undefined,
    form_identifier_exists__username: undefined,
    form_identifier_not_found: undefined,
    form_param_format_invalid: undefined,
    form_param_format_invalid__email_address: 'ئېلېكترونلۇق خەت ئادرېسى ئىناۋەتلىك فورماتتا بولۇشى كېرەك.',
    form_param_format_invalid__phone_number: 'تېلېفون نومۇرى ئىناۋەتلىك خەلقئارالىق فورماتتا بولۇشى كېرەك.',
    form_param_max_length_exceeded__first_name: 'ئىسمى 256 ھەرپتىن ئاشمايدۇ.',
    form_param_max_length_exceeded__last_name: 'فامىلىسى 256 ھەرپتىن ئاشمايدۇ.',
    form_param_max_length_exceeded__name: 'ئىسىم 256 ھەرپتىن ئاشمايدۇ.',
    form_param_nil: undefined,
    form_param_value_invalid: undefined,
    form_password_incorrect: undefined,
    form_password_length_too_short: undefined,
    form_password_not_strong_enough: 'پارولىڭىزنىڭ كۈچى يېتەرلىك ئەمەس.',
    form_password_pwned: 'بۇ پارول سانلىق مەلۇمات سىزىلىشىدا بايقالغان، ئىشلىتىشكە بولمايدۇ، باشقا پارول سىناڭ.',
    form_password_pwned__sign_in: undefined,
    form_password_size_in_bytes_exceeded:
      'پارولىڭىزغا رۇخسەت قىلىنغان ئەڭ چوڭ بايت سانىدىن ئاشتى، قىسقارتىڭ ياكى بەزى ئالاھىدە ھەرپلەرنى چىقىرىۋېتىڭ.',
    form_password_validation_failed: 'پارول خاتا',
    form_username_invalid_character: undefined,
    form_username_invalid_length: undefined,
    identification_deletion_failed: 'ئاخىرقى كىملىك بەلگىسىنى ئۆچۈرەلمەيسىز.',
    not_allowed_access: undefined,
    organization_domain_blocked: undefined,
    organization_domain_common: undefined,
    organization_domain_exists_for_enterprise_connection: undefined,
    organization_membership_quota_exceeded: undefined,
    organization_minimum_permissions_needed: undefined,
    passkey_already_exists: undefined,
    passkey_not_supported: undefined,
    passkey_pa_not_supported: undefined,
    passkey_registration_cancelled: undefined,
    passkey_retrieval_cancelled: undefined,
    passwordComplexity: {
      maximumLength: '{{length}} ھەرپتىن ئاز',
      minimumLength: '{{length}} ھەرپ ياكى ئۇنىڭدىن كۆپ',
      requireLowercase: 'بىر كىچىك ھەرپ',
      requireNumbers: 'بىر سان',
      requireSpecialCharacter: 'بىر ئالاھىدە ھەرپ',
      requireUppercase: 'بىر چوڭ ھەرپ',
      sentencePrefix: 'پارولىڭىزدا تۆۋەندىكىلەر بولۇشى كېرەك',
    },
    phone_number_exists: 'بۇ تېلېفون نومۇرى ئاللىقاچان ئىشلىتىلگەن، باشقا نومۇر سىناڭ.',
    web3_missing_identifier: undefined,
    zxcvbn: {
      couldBeStronger: 'پارولىڭىزنى ئىشلىتسىڭىز بولىدۇ، لېكىن تېخىمۇ كۈچلۈك بولالايدۇ. تېخىمۇ كۆپ ھەرپ قوشۇڭ.',
      goodPassword: 'ياخشى ئىش. بۇ ياخشى پارول.',
      notEnough: 'پارولىڭىزنىڭ كۈچى يېتەرلىك ئەمەس.',
      suggestions: {
        allUppercase: 'بەزى ھەرپلەرنى چوڭ يېزىڭ، لېكىن ھەممىسىنى ئەمەس.',
        anotherWord: 'تېخىمۇ ئورتاق ئەمەس سۆزلەرنى قوشۇڭ.',
        associatedYears: 'ئۆزىڭىزگە مۇناسىۋەتلىك يىللارنى ئەڭگىمەڭ.',
        capitalization: 'پەقەت بىرىنچى ھەرپنىلا چوڭ يېزىشتىن باشقا.',
        dates: 'ئۆزىڭىزگە مۇناسىۋەتلىك چېسلا ۋە يىللارنى ئەڭگىمەڭ.',
        l33t: 'ئالدىن بىلىنەدىغان ھەرپ ئالماشتۇرۇشلارنى ئەڭگىمەڭ، مەسىلەن "@" نى "a" نىڭ ئورنىغا قويۇش.',
        longerKeyboardPattern: 'ئۇزۇن كىلىتسىر تەرتىپىنى ئىشلىتىڭ ۋە تىپلاش يۆنىلىشىنى بىر قانچە قېتىم ئۆزگەرتىڭ.',
        noNeed: 'بەلگىلەر، سانلار ياكى چوڭ ھەرپلەرنى ئىشلەتمەي تۇرۇپلا كۈچلۈك پارول قۇرالايسىز.',
        pwned: 'ئەگەر بۇ پارولنى باشقا جايلاردا ئىشلەتكەن بولسىڭىز، ئۇنى ئۆزگەرتىشىڭىز كېرەك.',
        recentYears: 'يېقىنقى يىللارنى ئەڭگىمەڭ.',
        repeated: 'تەكرارلانغان سۆزلەر ۋە ھەرپلەرنى ئەڭگىمەڭ.',
        reverseWords: 'ئورتاق سۆزلەرنى تەتۈر يېزىشنى ئەڭگىمەڭ.',
        sequences: 'ئورتاق ھەرپ تەرتىپلىرىنى ئەڭگىمەڭ.',
        useWords: 'بىر قانچە سۆزنى ئىشلىتىڭ، لېكىن ئورتاق جۈملىلەرنى ئەڭگىمەڭ.',
      },
      warnings: {
        common: 'بۇ ئورتاق ئىشلىتىلىدىغان پارول.',
        commonNames: 'ئورتاق ئىسىم ۋە فامىلىلەرنى ئوڭايدۇ.',
        dates: 'چېسلالارنى ئوڭايدۇ.',
        extendedRepeat: '"abcabcabc" دىكىگەندەك تەكرارلانغان ھەرپ تەرتىپلىرىنى ئوڭايدۇ.',
        keyPattern: 'قىسقا كىلىتسىر تەرتىپلىرىنى ئوڭايدۇ.',
        namesByThemselves: 'بىر ئىسىم ياكى فامىلىنى ئوڭايدۇ.',
        pwned: 'پارولىڭىز ئىنتېرنېتتىكى سانلىق مەلۇمات سىزىلىشىدا بايقالغان.',
        recentYears: 'يېقىنقى يىللارنى ئوڭايدۇ.',
        sequences: '"abc" دىكىگەندەك ئورتاق ھەرپ تەرتىپلىرىنى ئوڭايدۇ.',
        similarToCommon: 'بۇ پارول ئورتاق پاروللارغا ئوخشايدۇ.',
        simpleRepeat: '"aaa" دىكىگەندەك تەكرارلانغان ھەرپلەرنى ئوڭايدۇ.',
        straightRow: 'كىلىتسىردىكى توغرىسىغا تىزىلغان كۇنۇپكىلارنى ئوڭايدۇ.',
        topHundred: 'بۇ تېخىمۇ كۆپ ئىشلىتىلىدىغان پارول.',
        topTen: 'بۇ ئىنتايىن كۆپ ئىشلىتىلىدىغان پارول.',
        userInputs: 'شەخسىي ياكى بەت بىلەن مۇناسىۋەتلىك سانلىق مەلۇمات بولماسلىقى كېرەك.',
        wordByItself: 'بىر سۆزنى ئوڭايدۇ.',
      },
    },
  },
  userButton: {
    action__addAccount: 'ھېسابات قوشۇش',
    action__manageAccount: 'ھېساباتنى باشقۇرۇش',
    action__signOut: 'چېكىنىش',
    action__signOutAll: 'ھەممە ھېساباتتىن چېكىنىش',
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: 'كۆچۈرۈلدى!',
      actionLabel__copy: 'ھەممىسىنى كۆچۈرۈش',
      actionLabel__download: '.txt نى چۈشۈرۈش',
      actionLabel__print: 'بېسىپ چىقىرىش',
      infoText1: 'بۇ ھېساباتقا زاپچاس كود قوزغىتىلىدۇ.',
      infoText2:
        'زاپچاس كودنى خىپىي ۋە بىخەتەر ساقلاڭ. ئەگەر ئۇلارنىڭ سىزىلىپ كەتكەنلىكىگە گۇمانىڭىز بولسا، زاپچاس كودنى قايتا ھاسىل قىلالايسىز.',
      subtitle__codelist: 'بىخەتەر ساقلاش ۋە خىپىي ساقلاش.',
      successMessage:
        'زاپچاس كود قوزغىتىلدى. ئەگەر دەلىللەش قۇرالىغا زىيارەت قىلالمايدىغان بولسىڭىز، بىر كودنى ئىشلىتىپ ھېساباتىڭىزغا كىرەلەيسىز. ھەر بىر كودنى بىر قېتىملا ئىشلىتسىڭىز بولىدۇ.',
      successSubtitle:
        'ئەگەر دەلىللەش قۇرالىغا زىيارەت قىلالمايدىغان بولسىڭىز، بىر كودنى ئىشلىتىپ ھېساباتىڭىزغا كىرەلەيسىز.',
      title: 'زاپچاس كود دەلىللەش قوشۇش',
      title__codelist: 'زاپچاس كود',
    },
    connectedAccountPage: {
      formHint: 'ھېساباتىڭىزنى باغلاش ئۈچۈن تەمىناتچى تاللاڭ.',
      formHint__noAccounts: 'ئىشلىتىشكە بولىدىغان تاشقى ھېسابات تەمىناتچىسى يوق.',
      removeResource: {
        messageLine1: '{{identifier}} بۇ ھېساباتتىن چىقىرىلىدۇ.',
        messageLine2: 'بۇ باغلانغان ھېساباتنى ئىشلىتەلمەيسىز ۋە ئۇنىڭغا باغلىق ھەر قانداق ئىقتىدار ئىشلەمەيدۇ.',
        successMessage: '{{connectedAccount}} ھېساباتىڭىزدىن چىقىرىلدى.',
        title: 'باغلانغان ھېساباتنى چىقىرىش',
      },
      socialButtonsBlockButton: '{{provider|titleize}} ھېساباتىنى باغلاش',
      successMessage: 'تەمىناتچى ھېساباتىڭىزغا قوشۇلدى',
      title: 'باغلانغان ھېسابات قوشۇش',
    },
    deletePage: {
      actionDescription: 'تۆۋەندە "Delete account" نى كىرگۈزۈڭ.',
      confirm: 'Delete account',
      messageLine1: 'ھېساباتىڭىزنى ئۆچۈرەمسىز؟',
      messageLine2: 'بۇ ھەرىكەت داۋاملىق ۋە قايتۇرۇلمايدۇ.',
      title: 'ھېساباتنى ئۆچۈرۈش',
    },
    emailAddressPage: {
      emailCode: {
        formHint: 'بۇ ئېلېكترونلۇق خەت ئادرېسىغا دەلىللەش كودى ئەۋەتىلىدۇ.',
        formSubtitle: '{{identifier}} غا ئەۋەتىلگەن دەلىللەش كودىنى كىرگۈزۈڭ',
        formTitle: 'دەلىللەش كودى',
        resendButton: 'دەلىللەش كودىنى قايتا ئەۋەتىش',
        successMessage: 'ئېلېكترونلۇق خەت {{identifier}} ھېساباتىڭىزغا قوشۇلدى.',
      },
      emailLink: {
        formHint: 'بۇ ئېلېكترونلۇق خەت ئادرېسىغا دەلىللەش ئۇلانمىسى ئەۋەتىلىدۇ.',
        formSubtitle: '{{identifier}} غا ئەۋەتىلگەن ئېلېكترونلۇق خەتتىكى دەلىللەش ئۇلانمىسىنى چېكىڭ',
        formTitle: 'دەلىللەش ئۇلانمىسى',
        resendButton: 'ئۇلانمىنى قايتا ئەۋەتىش',
        successMessage: 'ئېلېكترونلۇق خەت {{identifier}} ھېساباتىڭىزغا قوشۇلدى.',
      },
      enterpriseSSOLink: {
        formButton: undefined,
        formSubtitle: undefined,
      },
      formHint: undefined,
      removeResource: {
        messageLine1: '{{identifier}} بۇ ھېساباتتىن چىقىرىلىدۇ.',
        messageLine2: 'بۇ ئېلېكترونلۇق خەت ئادرېسى بىلەن كىرەلمەيسىز.',
        successMessage: 'ئېلېكترونلۇق خەت {{emailAddress}} ھېساباتىڭىزدىن چىقىرىلدى.',
        title: 'ئېلېكترونلۇق خەت ئادرېسىنى چىقىرىش',
      },
      title: 'ئېلېكترونلۇق خەت ئادرېسى قوشۇش',
      verifyTitle: 'ئېلېكترونلۇق خەت ئادرېسىنى دەلىللەش',
    },
    formButtonPrimary__add: 'قوشۇش',
    formButtonPrimary__continue: 'دەۋام',
    formButtonPrimary__finish: 'تامام',
    formButtonPrimary__remove: 'چىقىرىش',
    formButtonPrimary__save: 'ساقلاش',
    formButtonReset: 'بىكار قىلىش',
    mfaPage: {
      formHint: 'قوشۇش ئۇسۇلىنى تاللاڭ.',
      title: 'ئىككى قەدەملىك دەلىللەش قوشۇش',
    },
    mfaPhoneCodePage: {
      backButton: 'مەۋجۇت نومۇرنى ئىشلەت',
      primaryButton__addPhoneNumber: 'تېلېفون نومۇرى قوشۇش',
      removeResource: {
        messageLine1: '{{identifier}} كىرىشتە دەلىللەش كودى تاپشۇرۇۋالمايدۇ.',
        messageLine2: 'ھېساباتىڭىز بىخەتەر بولماسلىقى مۇمكىن. دەۋاملاشتۇرامسىز؟',
        successMessage: '{{mfaPhoneCode}} نىڭ SMS دەلىللەش كودى ئىككى قەدەملىك دەلىللەش چىقىرىلدى',
        title: 'ئىككى قەدەملىك دەلىللەشنى چىقىرىش',
      },
      subtitle__availablePhoneNumbers: 'SMS دەلىللەش كودى ئىككى قەدەملىك دەلىللەش ئۈچۈن تېلېفون نومۇرى تاللاڭ.',
      subtitle__unavailablePhoneNumbers:
        'SMS دەلىللەش كودى ئىككى قەدەملىك دەلىللەش ئۈچۈن ئىشلىتىشكە بولىدىغان تېلېفون نومۇرى يوق.',
      successMessage1: 'كىرىشتە، بۇ تېلېفون نومۇرىغا ئەۋەتىلگەن دەلىللەش كودىنى كىرگۈزۈش تەلەپ قىلىنىدۇ.',
      successMessage2:
        'بۇ زاپچاس كودلارنى ساقلاڭ ۋە بىخەتەر ساقلاش. ئەگەر دەلىللەش قۇرالىغا زىيارەت قىلالمايدىغان بولسىڭىز، زاپچاس كودنى ئىشلىتىپ كىرەلەيسىز.',
      successTitle: 'SMS دەلىللەش كودى دەلىللەش قوزغىتىلدى',
      title: 'SMS دەلىللەش كودى دەلىللەش قوشۇش',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: 'QR كودنى سىكانىرلاش',
        buttonUnableToScan__nonPrimary: 'QR كودنى سىكانىرلىيالامسىز؟',
        infoText__ableToScan:
          'دەلىللەش پروگراممىڭىزدا يېڭى كىرىش ئۇسۇلىنى تەڭشەڭ ۋە تۆۋەندىكى QR كودنى سىكانىرلاپ ھېساباتىڭىزغا باغلاڭ.',
        infoText__unableToScan: 'دەلىللەش پروگراممىڭىزدا يېڭى كىرىش ئۇسۇلىنى تەڭشەڭ ۋە تۆۋەندىكى Key نى كىرگۈزۈڭ.',
        inputLabel__unableToScan1:
          'ۋاقىت ياكى بىر قېتىملىق پارول قوزغىتىلغانلىقىنى جەزملەڭ، ئاندىن ھېساباتىڭىزنى باغلاڭ.',
        inputLabel__unableToScan2: 'ياكى، ئەگەر دەلىللەش پروگراممىڭىز TOTP URIs نى قوللىسا، تولۇق URI نى كۆچۈرەلەيسىز.',
      },
      removeResource: {
        messageLine1: 'كىرىشتە بۇ دەلىللەش پروگراممىسىدىن دەلىللەش كودى تەلەپ قىلىنمايدۇ.',
        messageLine2: 'ھېساباتىڭىز بىخەتەر بولماسلىقى مۇمكىن. دەۋاملاشتۇرامسىز؟',
        successMessage: 'دەلىللەش پروگراممىسى ئارقىلىق ئىككى قەدەملىك دەلىللەش چىقىرىلدى.',
        title: 'ئىككى قەدەملىك دەلىللەشنى چىقىرىش',
      },
      successMessage:
        'ئىككى قەدەملىك دەلىللەش قوزغىتىلدى. كىرىشتە، بۇ دەلىللەش پروگراممىسىدىن دەلىللەش كودىنى كىرگۈزۈش تەلەپ قىلىنىدۇ.',
      title: 'دەلىللەش پروگراممىسى قوشۇش',
      verifySubtitle: 'دەلىللەش پروگراممىڭىز تەرىپىدىن ھاسىل قىلىنغان دەلىللەش كودىنى كىرگۈزۈڭ',
      verifyTitle: 'دەلىللەش كودى',
    },
    mobileButton__menu: 'تىزىملىك',
    navbar: {
      account: 'ھېسابات',
      description: 'ھېساباتىڭىزنى باشقۇرۇش.',
      security: 'بىخەتەرلىك',
      title: 'ھېسابات',
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: undefined,
        title: undefined,
      },
      subtitle__rename: undefined,
      title__rename: undefined,
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        'ئەسكى پارولنى ئىشلىتىپ كىرگەن باشقا قۇراللاردىن چېكىنىشنى تەۋسىيە قىلىمىز.',
      readonly: 'سىز پەقەت شىركەت باغلىنىشى ئارقىلىق كىرەلەيسىز، شۇڭا ھازىر پارولىڭىزنى تەھرىرلىيەلمەيسىز.',
      successMessage__set: 'پارولىڭىز تەڭشەلدى.',
      successMessage__signOutOfOtherSessions: 'باشقا بارلىق قۇراللاردىن چېكىنىلدى.',
      successMessage__update: 'پارولىڭىز يېڭىلاندى.',
      title__set: 'پارول تەڭشەش',
      title__update: 'پارولنى ئۆزگەرتىش',
    },
    phoneNumberPage: {
      infoText: 'بۇ تېلېفون نومۇرىغا دەلىللەش ئۇلانمىسى ئەۋەتىلىدۇ.',
      removeResource: {
        messageLine1: '{{identifier}} بۇ ھېساباتتىن چىقىرىلىدۇ.',
        messageLine2: 'بۇ تېلېفون نومۇرى بىلەن كىرەلمەيسىز.',
        successMessage: 'تېلېفون نومۇرى {{phoneNumber}} ھېساباتىڭىزدىن چىقىرىلدى.',
        title: 'تېلېفون نومۇرىنى چىقىرىش',
      },
      successMessage: '{{identifier}} ھېساباتىڭىزغا قوشۇلدى.',
      title: 'تېلېفون نومۇرى قوشۇش',
      verifySubtitle: '{{identifier}} غا ئەۋەتىلگەن دەلىللەش كودىنى كىرگۈزۈڭ',
      verifyTitle: 'تېلېفون نومۇرىنى دەلىللەش',
    },
    profilePage: {
      fileDropAreaHint: '10MB دىن كىچىك JPG, PNG, GIF ياكى WEBP فورماتتىكى رەسىم يۈكلەڭ',
      imageFormDestructiveActionSubtitle: 'رەسىمنى چىقىرىش',
      imageFormSubtitle: 'رەسىم يۈكلەش',
      imageFormTitle: 'شەخسىي رەسىم',
      readonly: 'شەخسىي ئۇچۇرىڭىز شىركەت باغلىنىشى تەرىپىدىن تەمىنلىنىدۇ، تەھرىرلىيەلمەيسىز.',
      successMessage: 'شەخسىي ئۇچۇرىڭىز يېڭىلاندى.',
      title: 'شەخسىي ئۇچۇرنى يېڭىلاش',
    },
    start: {
      activeDevicesSection: {
        destructiveAction: 'قۇراللاردىن چېكىنىش',
        title: 'ئاكتىپ قۇراللار',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: 'قايتا سىناڭ',
        actionLabel__reauthorize: 'دەرھال ئىجازەت بېرىش',
        destructiveActionTitle: 'چىقىرىش',
        primaryButton: 'ھېساباتنى باغلاش',
        subtitle__disconnected: undefined,
        subtitle__reauthorize:
          'تەلەپ قىلىنغان ئىجازەت دائىرىسى يېڭىلاندى، ئىقتىدار چەكلىمىسىگە ئۇچرىشىڭىز مۇمكىن. مەسىلىلەرنىڭ ئالدىنى ئېلىش ئۈچۈن بۇ پروگراممىغا قايتا ئىجازەت بېرىڭ.',
        title: 'باغلانغان ھېساباتلار',
      },
      dangerSection: {
        deleteAccountButton: 'ھېساباتنى ئۆچۈرۈش',
        title: 'ھېساباتنى ئاخىرلاشتۇرۇش',
      },
      emailAddressesSection: {
        destructiveAction: 'ئېلېكترونلۇق خەت ئادرېسىنى چىقىرىش',
        detailsAction__nonPrimary: 'ئاساسىي قىلىش',
        detailsAction__primary: 'دەلىللەشنى تامام',
        detailsAction__unverified: 'دەلىللەشنى تامام',
        primaryButton: 'ئېلېكترونلۇق خەت ئادرېسى قوشۇش',
        title: 'ئېلېكترونلۇق خەت ئادرېسى',
      },
      enterpriseAccountsSection: {
        title: 'شىركەت ھېساباتى',
      },
      headerTitle__account: 'ھېسابات',
      headerTitle__security: 'بىخەتەرلىك',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: 'كودنى قايتا ھاسىل قىلىش',
          headerTitle: 'زاپچاس كود',
          subtitle__regenerate:
            'يېڭى بىخەتەر زاپچاس كودلارنى ئېلىڭ. ئالدىنقى زاپچاس كودلار ئۆچۈرۈلىدۇ ۋە ئىشلىتىشكە بولمايدۇ.',
          title__regenerate: 'زاپچاس كودنى قايتا ھاسىل قىلىش',
        },
        phoneCode: {
          actionLabel__setDefault: 'سۈكۈتتىكى قىلىش',
          destructiveActionLabel: 'تېلېفون نومۇرىنى چىقىرىش',
        },
        primaryButton: 'ئىككى قەدەملىك دەلىللەش قوشۇش',
        title: 'ئىككى قەدەملىك دەلىللەش',
        totp: {
          destructiveActionTitle: 'چىقىرىش',
          headerTitle: 'دەلىللەش پروگراممىسى',
        },
      },
      passkeysSection: {
        menuAction__destructive: undefined,
        menuAction__rename: undefined,
        title: undefined,
      },
      passwordSection: {
        primaryButton__setPassword: 'پارول تەڭشەش',
        primaryButton__updatePassword: 'پارولنى ئۆزگەرتىش',
        title: 'پارول',
      },
      phoneNumbersSection: {
        destructiveAction: 'تېلېفون نومۇرىنى چىقىرىش',
        detailsAction__nonPrimary: 'ئاساسىي قىلىش',
        detailsAction__primary: 'دەلىللەشنى تامام',
        detailsAction__unverified: 'دەلىللەشنى تامام',
        primaryButton: 'تېلېفون نومۇرى قوشۇش',
        title: 'تېلېفون نومۇرى',
      },
      profileSection: {
        primaryButton: 'شەخسىي ئۇچۇرنى يېڭىلاش',
        title: 'شەخسىي ئۇچۇر',
      },
      usernameSection: {
        primaryButton__setUsername: 'ئىشلەتكۈچى ئىسمىنى تەڭشەش',
        primaryButton__updateUsername: 'ئىشلەتكۈچى ئىسمىنى ئۆزگەرتىش',
        title: 'ئىشلەتكۈچى ئىسمى',
      },
      web3WalletsSection: {
        destructiveAction: 'ھەمياننى چىقىرىش',
        primaryButton: 'Web3 ھەميان',
        title: 'Web3 ھەميان',
      },
    },
    usernamePage: {
      successMessage: 'ئىشلەتكۈچى ئىسمىڭىز يېڭىلاندى.',
      title__set: 'ئىشلەتكۈچى ئىسمىنى تەڭشەش',
      title__update: 'ئىشلەتكۈچى ئىسمىنى ئۆزگەرتىش',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: '{{identifier}} بۇ ھېساباتتىن چىقىرىلىدۇ.',
        messageLine2: 'بۇ web3 ھەميان بىلەن كىرەلمەيسىز.',
        successMessage: '{{web3Wallet}} ھېساباتىڭىزدىن چىقىرىلدى.',
        title: 'web3 ھەمياننى چىقىرىش',
      },
      subtitle__availableWallets: 'ھېساباتىڭىزغا باغلاش ئۈچۈن web3 ھەميان تاللاڭ.',
      subtitle__unavailableWallets: 'ئىشلىتىشكە بولىدىغان web3 ھەميان يوق.',
      successMessage: 'ھەميان ھېساباتىڭىزغا قوشۇلدى.',
      title: 'web3 ھەميان قوشۇش',
      web3WalletButtonsBlockButton: undefined,
    },
  },
  waitlist: {
    start: {
      actionLink: undefined,
      actionText: undefined,
      formButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    success: {
      message: undefined,
      subtitle: undefined,
      title: undefined,
    },
  },
} as const;
